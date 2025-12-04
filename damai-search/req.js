import { writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import {
  whiteKeywords,
  blackKeywords,
  city,
  outputFileName,
  outputFilePath,
} from "./config.js";
import { matchKeywords, setURLQueries } from "./util.js";
import puppeteer from "puppeteer";
import { remove, ensureDir, emptyDir, outputFile } from "fs-extra/esm";

// TODO: bug: 演出条目有可能重复,疑似发生在页首或页尾
// TODO: 研究如何绕过用户拖动验证操作,现有两种方案:
// 1. 用网页版接口,如果收到错误响应,弹出窗口让用户完成验证,再通过某种方式把cookie添加到爬虫请求中;
// 2.使用移动端接口, 可能不需要用户验证, 但请求参数不够灵活, 只能使用指定的几种搜索参数.

// 也是主搜索页
// const baseUrl = "https://search.damai.cn/searchajax.html";
const baseUrl = "https://mtop.damai.cn/h5/mtop.damai.mec.aristotle.get/3.0/";

export async function fetchAllPages() {
  let curPage = 1;
  const pageSize = 60;
  let hasMore = true;

  const goodPerformances = [];
  const badPerformances = [];

  // const desktopUrlObj = new URL(baseUrl);
  // const setDesktopQueries = setURLQueries(desktopUrlObj, [
  //   ["ctl", "音乐会"],
  //   ["cty", city],
  //   ["tsg", "5"], // 代表时间跨度, 0-5分别代表全部、今天、明天、本周末、一个月内、按st和et字段指定日期
  //   ["st", "2025-12-01"],
  //   ["et", "2025-12-31"],
  //   ["order", "2"], // 时间顺序排列
  // ]);

  const mobileUrlObj = new URL(baseUrl);
  const setMobileQueries = setURLQueries(mobileUrlObj, [
    [
      "args",
      {
        comboConfigRule: "true",
        sortType: "10",
        latitude: "0",
        longitude: "0",
        currentCityId: "852",
        dateType: "5",
        startDate: "2025-12-03",
        endDate: "2025-12-18",
        artisteId: "-1",
        firstLevelSelection: "",
        secondLevelSelection: "",
        categoryId: "0",
        comboCityId: "852",
        platform: "8",
        comboChannel: "2",
        dmChannel: "damai@damaih5_h5",
      },
    ],
    ["patternName", "category_all"],
    ["patternVersion", "4.1"],
    [
      "dr",
      [
        {
          targetSectionId: "f332197e-b686-4f4a-bf06-43d893114419",
          targetLayerId: "0cc973fd-4761-433f-a2dc-c92060264703",
        },
      ],
    ],
    ["platform", "8"],
    ["comboChannel", "2"],
    ["dmChannel", "damai@damaih5_h5"],
    ["pageIndex", "0"],
    ["pageSize", "20"],
  ]);

  const nameBlackKeywords = blackKeywords.name;
  const nameWhiteKeywords = whiteKeywords.name;
  const venueBlackKeywords = blackKeywords.venue;
  const venueWhiteKeywords = whiteKeywords.venue;

  while (hasMore) {
    setMobileQueries([
      ["pageSize", pageSize],
      ["currPage", curPage],
    ]);

    console.log(`请求第${curPage}页...`);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://m.damai.cn/shows/category.html");

    const locatior = page.locator(
      ".filter-header-item.log-filter-panel-time-range.selected"
    );

    locatior.click("calendar-day calendar-confirm-log");

    // TODO: 继续利用无头浏览器获取演出信息

    // const desktopRes = await fetch(desktopUrlObj.toString(), {
    //   headers: {
    //     accept: "application/json, text/plain, */*",
    //     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    //     cookie:
    //       "loginkey=048e6cd8cda7401aa4f62640dd99fc48_1_1; user_id=651080268; x5sectag=493425; x5sec=7b22733b32223a2263613861343234643933643863656337222c22617365727665723b33223a22307c434b586372386b47454a3736334e7a362f2f2f2f2f774561447a49794d6a45794d7a59354e7a637a4e446b374d53494b59324677633278705a4756324d6a445438742b6142513d3d227d",
    //     Referer: "https://search.damai.cn/search.htm",
    //   },
    // });

    const mobileRes = await new Promise((res, rej) => {
      setTimeout(() => {
        fetch(
          "https://mtop.damai.cn/h5/mtop.damai.mec.aristotle.get/3.0/?jsv=2.7.5&appKey=12574478&t=1764493550220&sign=85c79dd72ed4b55d531f46c4bcc3df79&api=mtop.damai.mec.aristotle.get&v=3.0&H5Request=true&type=json&timeout=10000&dataType=json&valueType=string&forceAntiCreep=true&AntiCreep=true&data=%7B%22args%22%3A%22%7B%5C%22comboConfigRule%5C%22%3A%5C%22true%5C%22%2C%5C%22sortType%5C%22%3A%5C%222%5C%22%2C%5C%22latitude%5C%22%3A%5C%220%5C%22%2C%5C%22longitude%5C%22%3A%5C%220%5C%22%2C%5C%22groupId%5C%22%3A%5C%222346%5C%22%2C%5C%22dateType%5C%22%3A%5C%225%5C%22%2C%5C%22startDate%5C%22%3A%5C%222025-12-18%5C%22%2C%5C%22endDate%5C%22%3A%5C%222025-12-20%5C%22%2C%5C%22artisteId%5C%22%3A%5C%22-1%5C%22%2C%5C%22firstLevelSelection%5C%22%3A%5C%22g_0%5C%22%2C%5C%22secondLevelSelection%5C%22%3A%5C%22%5C%22%2C%5C%22pageIndex%5C%22%3A3%2C%5C%22pageSize%5C%22%3A15%2C%5C%22comboCityId%5C%22%3A%5C%22852%5C%22%2C%5C%22platform%5C%22%3A%5C%228%5C%22%2C%5C%22comboChannel%5C%22%3A%5C%222%5C%22%2C%5C%22dmChannel%5C%22%3A%5C%22damai%40damaih5_h5%5C%22%7D%22%2C%22patternName%22%3A%22category_concert%22%2C%22patternVersion%22%3A%224.1%22%2C%22dr%22%3A%22%5B%7B%5C%22targetSectionId%5C%22%3A%5C%22f67a51f2-120c-4c90-a444-6367567e7e4c%5C%22%2C%5C%22targetLayerId%5C%22%3A%5C%22e2376640-9de8-4179-a821-4f0bd265a446%5C%22%7D%5D%22%2C%22platform%22%3A%228%22%2C%22comboChannel%22%3A%222%22%2C%22dmChannel%22%3A%22damai%40damaih5_h5%22%7D",
          {
            headers: {
              accept: "application/json",
              "accept-language":
                "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
              "content-type": "application/x-www-form-urlencoded",
            },
            referrer: "https://m.damai.cn/shows/category.html",
          }
        ).then(res, rej);
      }, 2000);
    });

    // const text = await res1.text();

    // console.log("🌞 -- req.js:107 -- fetchAllPages -- text:", text);

    // const res = await fetch(urlObj.toString(), {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
    //     accept: "application/json, text/plain, */*",
    //     referer: "https://search.damai.cn/search.htm",
    //   },
    // });

    const json = await mobileRes.json();

    console.log(
      "🌞 -- req.js:109 -- fetchAllPages -- json:",
      json
      // json.data.nodes[0].nodes[0].nodes[0]
    );

    return;
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

        const sYear = startParts[0];
        const sMonth = startParts[1];
        const sDate = startParts[2];

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
        detailsWebPage: `https://detail.damai.cn/item.htm?id=${id}`,
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
    } else hasMore = false;
  }

  await outputFile(
    outputFilePath.good,
    JSON.stringify(goodPerformances, null, "\t")
  );

  await outputFile(
    outputFilePath.bad,
    JSON.stringify(badPerformances, null, "\t")
  );

  console.log("请求全部完成.");
}

// 在这里写解析的键值对
