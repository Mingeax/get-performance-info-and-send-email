import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { writeFileSync } from "fs";

puppeteer.use(StealthPlugin());

export class Crawler {
  constructor(browser, targetUrl) {
    this.#browser = browser;
    this.#targetUrl = targetUrl;
  }

  #browser;
  #page;
  #targetUrl;

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

  async crawl(targetUrl) {
    if (!this.#browser) return;

    if (!targetUrl) {
      targetUrl = this.#targetUrl;
    } else {
      this.#targetUrl = targetUrl;
    }

    await this.#page.goto(targetUrl);

    return listenToPage(this.#page);
  }

  dispose() {
    this.#page.removeAllListeners(["response"]);
    this.#browser.close();
  }
}

const listenToPage = async (page) => {
  // TODO: 把prom抽出成公共属性, 每次调用时更新
  const dataCaptureProm = new Promise((resolve) => {
    console.log("🌞 -- captcha.js:69 -- listenToPage -- resolve");

    page.on("response", (response) => handleResponse(response, resolve));
  });

  // 同时等待验证通过和数据捕获
  try {
    // 设置 5 分钟超时
    const jsonData = await Promise.race([
      dataCaptureProm,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 300000)
      ),
    ]);

    console.log("成功截获 JSON 数据！");

    return jsonData;

    // 保存原始 JSON 数据
    writeFileSync(
      "damai_raw_data.json",
      JSON.stringify(jsonData, null, 2),
      "utf-8"
    );
    console.log("数据已保存至 damai_raw_data.json");
  } catch (err) {
    console.error("抓取失败或超时:", err.message);
  }
};

const handleResponse = async (response, resolve) => {
  const url = response.url();

  console.log("🌞 -- captcha.js:102 -- handleResponse -- url:", url);

  if (
    url.includes("search.damai.cn/searchajax.html?") &&
    response.status() === 200
  ) {
    console.log("🌞 -- captcha.js:103 -- handleResponse -- url:", url);
    try {
      const data = await response.json();
      if (data) {
        resolve(data);
      }
    } catch {}
  }
};
