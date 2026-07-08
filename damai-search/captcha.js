import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { writeFileSync } from "fs";
// TODO: 写测试命令, 只爬数据不发邮件
// TODO: 验证码页面改为中文
puppeteer.use(StealthPlugin());

export class Crawler {
  constructor(browser) {
    this.#browser = browser;
    this.#browser.once("disconnected", () => {
      this.dispose();
      console.log("浏览器实例已被手动关闭或崩溃！");
      process.exit(0);
    });
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
    this.#page.once("close", () => {
      this.dispose();
      // process.exit(0);
      console.log("当前页面（Tab 页）已被用户手动关闭！");
      // 在这里执行你的清理逻辑，例如清除定时器、记录日志等
    });

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

    await this.#page.removeAllListeners("close");
    await this.#page?.close().catch(() => {});
    this.#page = await this.#browser.newPage();

    // Chrome DevTools Protocol
    const client = await this.#page.target().createCDPSession();
    await client.send("Network.clearBrowserCookies");

    this.#dataCaptureProm = new Promise((resolve) => {
      console.log("🌞 -- captcha.js:69 -- listenToPage -- resolve");

      this.#page.removeAllListeners("response");
      this.#page.on("response", (response) => {
        handleResponse(response, resolve);
      });
    });

    this.#dataCaptureProm.finally(() => {
      this.#page.removeAllListeners("response");
    });
    this.#dataCaptureProm.then((res) => {
      console.log("🌞 -- captcha.js:65 -- Crawler -- crawl -- res:", res);
    });

    await this.#page.goto(targetUrl);

    let timeoutId;
    const timeoutProm = new Promise((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error("Timeout")), 300000);
    });
    try {
      console.log(
        "🌞 -- captcha.js:74 -- Crawler -- crawl -- this.#dataCaptureProm:",
        this.#dataCaptureProm
      );
      const jsonData = await Promise.race([this.#dataCaptureProm, timeoutProm]);

      console.log("成功截获 JSON 数据！");

      return jsonData;
    } catch (err) {
      console.error("抓取失败或超时:", err.message);
    } finally {
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    }
  }

  async dispose() {
    console.log("dispose!");

    this.#page?.removeAllListeners('close');
    this.#browser?.removeAllListeners('disconnected');
    try {
      if (this.#page && !this.#page.isClosed()) {
        await this.#page.close().catch(() => {});
      }
    } finally {
      this.#page = undefined;
      if (this.#browser) {
        await this.#browser.close().catch(() => {});
        this.#browser = undefined;
      }
    }
  }
}

// 接收所需的data, 并传给resolve
const handleResponse = async (response, resolve) => {
  const url = response.url();

  if (
    url.includes("search.damai.cn/searchajax.html?") &&
    response.status() === 200
  ) {
    try {
      const data = await response.json();
      if (data) {
        resolve(data);
      }
    } catch {}
  }
};
