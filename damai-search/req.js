import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import {
  whiteKeywords,
  blackKeywords,
  city,
  outputFileName,
} from "./config.js";
import { matchKeywords, setURLQueries } from "./util.js";
import puppeteer from "puppeteer";
import { remove, ensureDir, emptyDir, outputFile } from "fs-extra/esm";

// TODO: bug: 演出条目有可能重复,疑似发生在页首或页尾

// 也是主搜索页
const baseUrl = "https://search.damai.cn/searchajax.html";
const distDir = resolve(import.meta.dirname, "dist");

const outputFilePath = {
  bad: resolve(distDir, `${outputFileName.bad}.txt`),
  good: resolve(distDir, `${outputFileName.good}.txt`),
};

export async function fetchAllPages() {
  let curPage = 1;
  const pageSize = 60;
  let hasMore = true;

  const goodPerformances = [];
  const badPerformances = [];

  const urlObj = new URL(baseUrl);
  const setQueries = setURLQueries(urlObj, [
    ["ctl", "音乐会"],
    ["cty", city],
    ["tsg", "5"],
    ["st", "2025-12-01"],
    ["et", "2025-12-31"],
    ["order", "2"], // 时间顺序排列
  ]);

  const nameBlackKeywords = blackKeywords.name;
  const nameWhiteKeywords = whiteKeywords.name;
  const venueBlackKeywords = blackKeywords.venue;
  const venueWhiteKeywords = whiteKeywords.venue;

  while (hasMore) {
    setQueries([
      ["pageSize", pageSize],
      ["currPage", curPage],
    ]);

    console.log(`请求第${curPage}页...`);
    console.log(
      "🌞 -- req.js:56 -- fetchAllPages -- urlObj.toString():",
      urlObj.toString()
    );

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(
    //   "https://search.damai.cn/searchajax.html?keyword=&cty=%E5%8C%97%E4%BA%AC&ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&sctl=&tsg=0&st=&et=&order=1&pageSize=30&currPage=1&tn="
    // );

    const res1 = await fetch(
      "https://search.damai.cn/searchajax.html?keyword=&cty=%E5%8C%97%E4%BA%AC&ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&sctl=&tsg=0&st=&et=&order=1&pageSize=30&currPage=1&tn=",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "cache-control": "no-cache",
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Chromium";v="142", "Microsoft Edge";v="142", "Not_A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-xsrf-token": "ba298a81-ae73-4123-84bd-f63ebb738e12",
          cookie:
            "XSRF-TOKEN=ba298a81-ae73-4123-84bd-f63ebb738e12; isg=BIOD9m_47vfg56IDBMfan75qEkEt-Bc64LtvPrVg2eJYdKOWP8vRiAPn7wQ6MG8y; x5sec=7b22733b32223a2265343437323361623131616332656335222c22617365727665723b33223a22307c434d65662f386747454c764c323573454967706a5958427a62476c6b5a5859794d4e507933356f46227d",
          Referer:
            "https://search.damai.cn/search.htm?spm=a2oeg.home.category.ditem_5.591b23e1ghzF98&ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&order=1&cty=%E5%8C%97%E4%BA%AC",
        },
        body: null,
        method: "GET",
      }
    );
    // const text = await res1.text();

    // console.log("🌞 -- req.js:107 -- fetchAllPages -- text:", text);

    const res = await fetch(urlObj.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
        accept: "application/json, text/plain, */*",
        referer: "https://search.damai.cn/search.htm",
      },
    });

    const json = await res1.json();
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
