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

// 也是主搜索页
const baseUrl = "https://search.damai.cn/searchajax.html";

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

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(
    //   "https://search.damai.cn/searchajax.html?keyword=&cty=%E5%8C%97%E4%BA%AC&ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&sctl=&tsg=0&st=&et=&order=1&pageSize=30&currPage=1&tn="
    // );

    const res1 = await fetch(urlObj.toString(), {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        cookie:
          "cna=PZNyIVUoyUwCAZz+But2SByv; tfstk=go2tKNZw0wbguB8wXrfhn3q3YyIht6qavPrWnq0MGyULzzpcb5409mU0JGrgcNPYJPq7sfqbnmwxQJVMnVbZHoaoHablETqabjkfraA4vOMZhm6ml6c1iupsaablE9f6AxQOrr4hvDDI02isccifv2im4xOs1rgIO0ik5xMblMHIcmYscKO1dkiiRqMjhrZCvmuIfxMblksK0vf1QqXKzKF1w8alugB9HKeKXf3Jn2pvHimt64ZsJa_7pEGtPlgphN_lO40x88_h9kPQ1PmUkTQKI7qu3bw6RGm_wo2-ZXTH9rktDukUFaAmtSE_hXFFFEnaGl2YGkjJa0PQ7RPxen6_vA3tNcldFKUSG0ErL8_kiXVYf-GLTaOoPJrQZSUG8KggwkaKZJYHEAVuq-l7CFIPF82R5u8oymA1vMd2gfieE5TuqdaUR4nKrMbBgIlLID3lvMd2gfiEv4jUMIRq9Rf..; XSRF-TOKEN=310bcb93-3b01-483a-a4f1-1d1ef3c711b7; _samesite_flag_=true; cookie2=128131085455c9c8f026151df2e3a3fb; t=c71f3d999a8d8e58516cea6a1d051445; _tb_token_=3737b35113b4b; _hvn_login=18; sgcookie=E100oSKufBiIuOq6Ge6TnsTMsowfgoAJofhF%2BkoMK4WCXOKwYD5IuiNH1LFZ9sMglTPRYHrcCGFw9fBl2U2yG%2F8cVYZKJPFBktw4RT89xZ5hXZw%3D; munb=2221236977349; csg=72511b17; damai.cn_nickName=%E9%BA%A6%E5%AD%90cDhbv; damai.cn_user=ahruoymlvi8tfNkFljak8FERFXfZoru3ZevkiL9Uo7EZAV7C5O3GkjgspGRDi9wyGxb2+Rjuqig=; damai.cn_user_new=ahruoymlvi8tfNkFljak8FERFXfZoru3ZevkiL9Uo7EZAV7C5O3GkjgspGRDi9wyGxb2%2BRjuqig%3D; h5token=048e6cd8cda7401aa4f62640dd99fc48_1_1; damai_cn_user=ahruoymlvi8tfNkFljak8FERFXfZoru3ZevkiL9Uo7EZAV7C5O3GkjgspGRDi9wyGxb2%2BRjuqig%3D; loginkey=048e6cd8cda7401aa4f62640dd99fc48_1_1; user_id=651080268; isg=BHJyqdkfT6y2ynOQAiDCrZF5w7hUA3adPzo8UzxPoCWHzxDJJJH5rB9kvmvz2-41; x5sectag=493425; mtop_partitioned_detect=1; _m_h5_tk=7171e68fe14f74bfabc8fe9d98ef34b1_1763812929750; _m_h5_tk_enc=956933f44a7b52628c546c5c2d0836e1; x5sec=7b22733b32223a2230366364626132393836396565383962222c22617365727665723b33223a22307c434b475568736b474549584368653448476738794d6a49784d6a4d324f5463334d7a51354f7a4d69436d4e6863484e736157526c646a4977302f4c666d67553d227d",
        Referer: "https://search.damai.cn/search.htm",
      },
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
