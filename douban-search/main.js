import { emptyDir, outputFile } from "fs-extra/esm";
import { JSDOM } from "jsdom";
import { appendFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { outputFileName, outputFilePath } from "./config.js";

const baseUrl = "https://www.douban.com/doulist/111299960/";

const urlObj = new URL(baseUrl);

const res = await fetch(urlObj.toString(), {
  // headers: {
  // },
});

const html = await res.text();

const dom = new JSDOM(html);
const distDir = dirname(outputFilePath.good);
emptyDir(distDir)
  .then(() => {
    return Promise.allSettled([
      outputFile(outputFilePath.good, `查询时间: ${new Date()}\n`),
      outputFile(outputFilePath.bad, `查询时间: ${new Date()}\n`),
    ]);
  })
  .then(() => interpretDomNOutput());

const interpretDomNOutput = () => {
  dom.window.document
    .querySelectorAll(".doulist-item")
    .forEach((listItem, i) => {
      const itemBody = listItem.querySelector(".mod .bd.doulist-subject");

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
      const dateLocEntries = textCollection.location
        .split("\n")
        .map((entry) => entry.split(" "));

      const textArr = Object.values(textCollection);

      const text = `
影片${i + 1}:
${textArr.join("\n")}
  
--------------------------------
`;

      const goodOrBad = textCollection.rate >= 8 ? "good" : "bad";
      appendFile(outputFilePath[goodOrBad], text);
    });
};
