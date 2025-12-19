import { emptyDir, outputFile } from "fs-extra/esm";
import { JSDOM } from "jsdom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import localeData from "dayjs/plugin/localeData.js";
import "dayjs/locale/zh-cn.js";
import { appendFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { outputFileName, outputFilePath } from "./config.js";

dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.locale("zh-cn");

// console.log(dayjs.weekdays());
// console.log(dayjs.localeData());
// console.log(dayjs().localeData());

const WEEK_DAYS = dayjs.weekdays();

const baseUrl = "https://www.douban.com/doulist/111299960/";
const now = dayjs();

const distDirName = "dist";
const urlObj = new URL(baseUrl);
urlObj.searchParams.set("sort", "seq");

const distDir = resolve(import.meta.dirname, distDirName);

emptyDir(distDir)
  .then(() => {
    return Promise.allSettled([
      outputFile(outputFilePath.good, `查询时间: ${new Date()}\n`),
      outputFile(outputFilePath.bad, `查询时间: ${new Date()}\n`),
    ]);
  })
  .then(async () => {
    let startNum = 1;

    for await (const dom of fetchIterator()) {
      if (!dom) break;

      try {
        await interpretDomNOutput(dom);
      } catch (e) {
        if (e.message === "当前电影列表为空.") {
          console.log("请求完毕,进程关闭中...");
        } else {
          console.log(e.message);
        }
        break;
      }
    }

    async function* fetchIterator() {
      while (true) {
        console.log(`正在从第${startNum}部电影开始请求...`);
        urlObj.searchParams.set("start", startNum);
        const html = await (
          await fetch(urlObj.toString(), {
            headers: {},
          })
        ).text();

        yield new JSDOM(html);

        startNum += 25;
      }
    }

    // while (hasMore) {
    //   break;
    //   console.log("🌞 -- main.js:26 -- hasMore:", hasMore);

    //   urlObj.searchParams.set("start", startNum);

    //   fetch(urlObj.toString(), {
    //     // headers: {
    //     // },
    //   }).then((res) => {
    //     const html = res.text();

    //     console.log("🌞 -- main.js:37 -- html:", html);

    //     const dom = new JSDOM(html);

    //     try {
    //       console.log("🌞 -- main.js:37 -- dom:", dom);
    //       interpretDomNOutput(dom);
    //     } catch (e) {
    //       console.log("🌞 -- main.js:37 -- e:", e);
    //       hasMore = false;
    //     }

    //     startNum += 25;
    //   });
    // }
  });

const interpretDomNOutput = (dom) => {
  const itemList = dom.window.document.querySelectorAll(".doulist-item");

  if (!itemList.length) throw Error("当前电影列表为空.");

  let prom = Promise.resolve();

  itemList.forEach((listItem, i) => {
    const itemBody = listItem.querySelector(".mod .bd.doulist-subject");

    if (!itemBody) throw Error("当前电影列表为空.");

    const anchor = itemBody.querySelector(".title>a");
    const rate = itemBody.querySelector(".rating_nums");
    const desc = itemBody.querySelector(".abstract");
    const comment = listItem.querySelector(".comment-item>.comment");

    const textCollection = {
      name: anchor?.textContent?.trim(),
      url: anchor?.href?.trim(),
      rate: rate?.textContent?.trim(),
      abst: desc?.textContent?.trim().replace(/(\n +)+/g, "\n"),
      dateNLoc: comment?.textContent?.trim().replace("评语：", ""),
    };

    /**
     * @type {[string, string][]}
     * @example [ [ '10月12日', '百子湾厅' ], [ '10月30日', '2号厅' ] ]
     */
    const dateLocEntries = textCollection?.dateNLoc
      ?.split("\n")
      ?.map((entry) => entry.split(" "));

    if (!dateLocEntries) return;

    dateLocEntries.forEach((entry) => {
      const dayObj = strToDay(entry[0]);

      entry[0] += ` ${WEEK_DAYS[dayObj.day()]}`;
    });

    textCollection.dateNLoc = dateLocEntries
      .map((entry) => entry.join(" "))
      .join("\n");

    const textArr = Object.values(textCollection);

    const text = `
影片${i + 1}:
${textArr.join("\n")}
  
--------------------------------
`;

    let goodOrBad = "good";

    if (
      textCollection.rate < 8 ||
      !dateLocEntries.some(
        ([date, loc]) => !loc.includes("百子湾") && strToDay(date) > now
      )
    ) {
      goodOrBad = "bad";
    }

    prom = prom.then(() => appendFile(outputFilePath[goodOrBad], text));
  });

  return prom;
};

const strToDay = (str) => {
  let ret = dayjs(str, ["MM月DD日", "M月D日", "M月DD日", "MM月D日"]);

  if (now.month() === 11 && ret.month() === 0) ret = ret.year(now.year() + 1);

  return ret;
};
