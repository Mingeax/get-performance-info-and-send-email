import { JSDOM } from "jsdom";

const baseUrl = "https://www.douban.com/doulist/111299960/";

const urlObj = new URL(baseUrl);

const res = await fetch(urlObj.toString(), {
  // headers: {
  // },
});

const html = await res.text();

const dom = new JSDOM(html);

dom.window.document.querySelectorAll(".doulist-item").forEach((listItem, i) => {
  const itemBody = listItem.querySelector(".mod .bd.doulist-subject");

  const anchor = itemBody.querySelector(".title>a");
  const rate = itemBody.querySelector(".rating_nums");
  const desc = itemBody.querySelector(".abstract");
  const comment = listItem.querySelector(".comment-item>.comment");

  const textCollection = {
    url: anchor?.href?.trim(),
    name: anchor?.textContent?.trim(),
    rate: rate?.textContent?.trim(),
    abst: desc?.textContent?.trim().replace(/(\n +)+/g, "\n"),
    location: comment?.textContent?.trim().replace("评语：", ""),
  };

  /** 
   * @type {[string, string][]}
   * @example [ [ '10月12日', '百子湾厅' ], [ '10月30日', '2号厅' ] ]
   */
  const locEntries = textCollection.location.split("\n").map((entry) => {
    return entry.split(" ");
  });

  const textArr = Object.values(textCollection);

  if (textCollection.rate >= 8) {
    console.log(
      `影片${i + 1}:\n` +
        textArr.join("\n") +
        "\n--------------------------------"
    );
  }
});
