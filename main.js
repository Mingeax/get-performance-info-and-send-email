import { spawn } from "child_process";
import { outputFilePath as damaiDistPath } from "./damai-search/config.js";
import { outputFilePath as doubanDistPath } from "./douban-search/config.js";
import { resolve } from "path";
// TODO: 把好信息和坏信息分两封邮件发出去; 大麦信息按照豆瓣信息的标准进行格式化; 当前脚本需要整理代码.
const damaiSearchChild = spawn(
  "node",
  [resolve(import.meta.dirname, "./damai-search/main.js")],
  { stdio: "inherit" }
);
const doubanSearchChild = spawn(
  "node",
  [resolve(import.meta.dirname, "./douban-search/main.js")],
  { stdio: "inherit" }
);

const children = new Set();

children.add(damaiSearchChild).add(doubanSearchChild);

damaiSearchChild.on("close", (code) => {
  children.delete(damaiSearchChild);
  if (!children.size) {
    const autoEmailChild = spawn(
      "node",
      [
        resolve(import.meta.dirname, "./auto-email/main.js"),
        "--filePath",
        [
          damaiDistPath.good,
          damaiDistPath.bad,
          doubanDistPath.good,
          doubanDistPath.bad,
        ].join(","),
      ],
      { stdio: "inherit" }
    );
    autoEmailChild.on("close", (code) => {
      children.delete(autoEmailChild);
      console.log(`autoMailChild子进程退出，退出码 ${code}`);
    });
  }
  console.log(`damaiSearchChild子进程退出，退出码 ${code}`);
});
doubanSearchChild.on("close", (code) => {
  children.delete(doubanSearchChild);
  if (!children.size) {
    const autoEmailChild = spawn(
      "node",
      [
        resolve(import.meta.dirname, "./auto-email/main.js"),
        "--filePath",
        [
          damaiDistPath.good,
          damaiDistPath.bad,
          doubanDistPath.good,
          doubanDistPath.bad,
        ].join(","),
      ],
      { stdio: "inherit" }
    );
    autoEmailChild.on("close", (code) => {
      children.delete(autoEmailChild);
      console.log(`autoMailChild子进程退出，退出码 ${code}`);
    });
  }
  console.log(`doubanSearchChild子进程退出，退出码 ${code}`);
});

// console.log(parseArgs(process.argv));
