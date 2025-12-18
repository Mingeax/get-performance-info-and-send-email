import { emptyDir, outputFile } from "fs-extra/esm";
import { JSDOM } from "jsdom";
import { appendFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { outputFileName, outputFilePath } from "./config.js";

const baseUrl = "https://www.douban.com/doulist/111299960/";

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
    let hasMore = true;
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

        const dom = new JSDOM(html);

        yield dom;

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
// TODO: 筛选掉工作日和已放映的片场
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
      location: comment?.textContent?.trim().replace("评语：", ""),
    };

    /**
     * @type {[string, string][]}
     * @example [ [ '10月12日', '百子湾厅' ], [ '10月30日', '2号厅' ] ]
     */
    const dateLocEntries = textCollection?.location
      ?.split("\n")
      ?.map((entry) => entry.split(" "));

    const textArr = Object.values(textCollection);

    const text = `
影片${i + 1}:
${textArr.join("\n")}
  
--------------------------------
`;

    const goodOrBad = textCollection.rate >= 8 ? "good" : "bad";

    prom = prom.then(() => appendFile(outputFilePath[goodOrBad], text));
  });

  return prom;
};
