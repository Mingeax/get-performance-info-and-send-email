import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { writeFileSync } from "fs";

puppeteer.use(StealthPlugin());

export class Crawler {
  constructor(browser) {
    this.#browser = browser;
  }

  #browser;
  #page;
  #targetUrl;
  #dataCaptureProm;

  static async init() {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized", "--lang=zh-CN"],
    });

    return new Crawler(browser);
  }

  async openPage() {
    const page = await this.#browser.newPage();

    this.#page = page;

    await page.setExtraHTTPHeaders({
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    });

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, "language", { get: () => "zh-CN" });
      Object.defineProperty(navigator, "languages", {
        get: () => ["zh-CN", "zh"],
      });
    });

    return;
  }

  async crawl(targetUrl = this.#targetUrl) {
    if (!this.#browser) throw new Error("Browser instance is not initialized.");

    this.#targetUrl = targetUrl;

    this.#page?.close();
    this.#page = await this.#browser.newPage();

    // const cookies = await this.#page.cookies();
    // await this.#page.deleteCookie(...cookies);

    const client = await this.#page.target().createCDPSession();
    await client.send("Network.clearBrowserCookies");

    this.#dataCaptureProm = new Promise((resolve) => {
      console.log("🌞 -- captcha.js:69 -- listenToPage -- resolve");

      this.#page.removeAllListeners(["response"]);
      this.#page.on("response", (response) => {
        handleResponse(response, resolve);
      });
    });

    this.#dataCaptureProm.finally(() => {
      this.#page.removeAllListeners(["response"]);
    });
    this.#dataCaptureProm.then((res) => {
      console.log("🌞 -- captcha.js:65 -- Crawler -- crawl -- res:", res);
    });

    await this.#page.goto(targetUrl);

    // TODO: 可以增加失败重试逻辑
    try {
      // 设置 5 分钟超时
      console.log(
        "🌞 -- captcha.js:74 -- Crawler -- crawl -- this.#dataCaptureProm:",
        this.#dataCaptureProm,
      );
      const jsonData = await Promise.race([
        this.#dataCaptureProm,
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 300000),
        ),
      ]);

      console.log("成功截获 JSON 数据！");

      return jsonData;
    } catch (err) {
      console.error("抓取失败或超时:", err.message);
    }
  }

  dispose() {
    this.#page.removeAllListeners(["response"]);
    this.#browser.close();
  }
}

// const listenToPage = async (page, dataCaptureProm) => {
//   // 同时等待验证通过和数据捕获
//   try {
//     // 设置 5 分钟超时
//     const jsonData = await Promise.race([
//       dataCaptureProm,
//       new Promise((_, reject) =>
//         setTimeout(() => reject(new Error("Timeout")), 300000),
//       ),
//     ]);

//     console.log("成功截获 JSON 数据！");

//     return jsonData;

//     // 保存原始 JSON 数据
//     writeFileSync(
//       "damai_raw_data.json",
//       JSON.stringify(jsonData, null, 2),
//       "utf-8",
//     );
//     console.log("数据已保存至 damai_raw_data.json");
//   } catch (err) {
//     console.error("抓取失败或超时:", err.message);
//   }
// };

const handleResponse = async (response, resolve) => {
  const url = response.url();

  // console.log("🌞 -- captcha.js:102 -- handleResponse -- url:", url);

  if (
    url.includes("search.damai.cn/searchajax.html?") &&
    response.status() === 200
  ) {
    // console.log("🌞 -- captcha.js:103 -- handleResponse -- url:", url);
    try {
      const data = await response.json();
      if (data) {
        resolve(data);
      }
    } catch {}
  }
};
