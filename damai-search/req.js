import { writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import {
  whiteKeywords,
  blackKeywords,
  city,
  outputFileName,
  outputFilePath,
  dateSpanOptions,
} from "./config.js";
import { matchKeywords, setURLQueries } from "./util.js";
import { Crawler } from "./captcha.js";
import { remove, ensureDir, emptyDir, outputFile } from "fs-extra/esm";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

// TODO: bug: 演出条目有可能重复,疑似发生在页首或页尾
// TODO: 做权重式黑白名单
// TODO: 写测试脚本和用例
// TODO: 用主脚本命令传参的方式, 重构start:damai,start:douban,start:email三个命令
// 绕过滑块验证码,暂采取Browserless方案, 让用户主动手动过码

// 也是主搜索页
const baseUrl = "https://search.damai.cn/searchajax.html";
const dayjsNow = dayjs();

export async function fetchAllPages() {
  let curPage = 1;
  const pageSize = 60;
  let hasMore = true;

  const goodPerformances = [];
  const badPerformances = [];

  const desktopUrlObj = new URL(baseUrl);
  const setDesktopQueries = setURLQueries(desktopUrlObj, [
    ["ctl", "音乐会"],
    ["cty", city],
    ["tsg", "5"], // 代表时间跨度, 0-5分别代表全部、今天、明天、本周末、一个月内、按st和et字段指定日期
    [
      "st",
      dateSpanOptions.daysFromToday
        ? dayjsNow.format("YYYY-MM-DD")
        : dateSpanOptions.st,
    ],
    [
      "et",
      dateSpanOptions.daysFromToday
        ? dayjsNow
            .add(dateSpanOptions.daysFromToday, "day")
            .format("YYYY-MM-DD")
        : dateSpanOptions.et,
    ],
    ["order", "2"], // 时间顺序排列
  ]);

  const nameBlackKeywords = blackKeywords.name;
  const nameWhiteKeywords = whiteKeywords.name;
  const venueBlackKeywords = blackKeywords.venue;
  const venueWhiteKeywords = whiteKeywords.venue;

  let crawler;
  try {
    crawler = await Crawler.init();
    await crawler.openPage();

    while (hasMore) {
      setDesktopQueries([
        ["pageSize", pageSize],
        ["currPage", curPage],
      ]);

      const json = await crawler.crawl(desktopUrlObj.toString());

      console.log("🌞 -- req.js:109 -- fetchAllPages -- json:", json);

      const { resultData } = json.pageData;

      if (curPage === 1) {
        console.log("演出有以下字段: ", Object.keys(resultData[0]));
      }

      console.log(`第${curPage}页数据条数:`, resultData.length);

      resultData.forEach((item) => {
        const {
          showtime,
          nameNoHtml: name,
          venue,
          actors,
          cityname,
          price_str,
          showstatus,
        } = item;

        let weekendFlag = false;
        let nameKeywordFlag = true;
        let venueKeywordFlag = true;

        if (showtime.includes("-")) {
          // 例: '2025.08.08-08.24'
          const [start, end] = showtime.split("-");

          const startParts = start.split(".");
          const endParts = end.split(".");

          const isEndNextYear = endParts.length === 3;

          const [sYear, sMonth, sDate] = startParts;

          const eYear = isEndNextYear ? endParts[0] : sYear;
          const eMonth = isEndNextYear ? 0 : endParts[0];
          const eDate = isEndNextYear ? 1 : endParts[1];

          const startDate = new Date(start);
          const endDate = new Date();

          endDate.setFullYear(eYear);

          if (eYear === sYear + 1) {
            endDate.setMonth(0);
            endDate.setDate(1);

            endDate.setDate(endDate.getDate() - 1);
          } else {
            endDate.setMonth(eMonth - 1);
            endDate.setDate(eDate);
          }

          const curDate = startDate;

          while (curDate <= endDate && curDate.getFullYear() == sYear) {
            const day = curDate.getDay();

            if (day === 0 || day === 6) {
              weekendFlag = true;
              break;
            }

            // 前进到下一个日期
            curDate.setDate(curDate.getDate() + 1);
          }
        } else {
          // 例: '2025.08.15 周五 19:30'
          const date = new Date(showtime.split(" ")[0]);

          const day = date.getDay();
          weekendFlag =
            showtime.includes("周五") ||
            showtime.includes("周六") ||
            showtime.includes("周日");
        }

        if (
          matchKeywords(nameBlackKeywords, name) &&
          !matchKeywords(nameWhiteKeywords, name)
        ) {
          nameKeywordFlag = false;
        }

        if (
          matchKeywords(venueBlackKeywords, venue) &&
          !matchKeywords(venueWhiteKeywords, venue)
        ) {
          venueKeywordFlag = false;
        }

        const id = item.id.split("_").at(-1);

        const recordItem = {
          id,
          cityname,
          name,
          venue,
          price_str,
          showtime,
          showstatus,
          detailsWebPage: ` https://detail.damai.cn/item.htm?id=${id} `,
        };

        if (actors) recordItem.actors = actors;

        if (weekendFlag && nameKeywordFlag && venueKeywordFlag) {
          goodPerformances.push(recordItem);
        } else {
          badPerformances.push(recordItem);
        }
      });

      resultData.sort((pre, post) => {
        const preTime = pre.showtime;
        const postTime = post.showtime;

        const regularPre = preTime.includes("-")
          ? preTime.split("-")[0]
          : preTime;
        const regularPost = postTime.includes("-")
          ? postTime.split("-")[0]
          : postTime;

        const preDate = new Date(regularPre);
        const postDate = new Date(regularPost);

        return preDate - postDate;
      });

      // 判断是否还有下一页
      if (json.pageData.nextPage === curPage + 1) {
        curPage++;
        hasMore = true;
      } else {
        hasMore = false;
      }
    }

    console.log(
      "🌞 -- req.js:300 -- fetchAllPages -- goodPerformances:",
      goodPerformances
    );

    await outputFile(
      outputFilePath.good,
      JSON.stringify(goodPerformances, null, "\t")
    );

    await outputFile(
      outputFilePath.bad,
      JSON.stringify(badPerformances, null, "\t")
    );

    console.log("请求全部完成.");
  } finally {
    if (crawler) await crawler.dispose();
  }
}

// 在这里写解析的键值对
