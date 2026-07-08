import { spawn } from "child_process";
import { outputFilePath as damaiDistPath } from "./damai-search/config.js";
import { outputFilePath as doubanDistPath } from "./douban-search/config.js";
import { resolve } from "path";
// TODO: 大麦信息按照豆瓣信息的标准进行格式化; 当前脚本需要整理代码.

const filePathArgsDamai = [damaiDistPath.good, damaiDistPath.bad].join(",");
const filePathArgsDouban = [doubanDistPath.good, doubanDistPath.bad].join(",");

const filePathArgName = "--filePath";

const emailScriptPath = resolve(import.meta.dirname, "./auto-email/main.js");

const spawnStdioOption = {
  stdio: "inherit",
};

const damaiSearchChild = spawn(
  "node",
  [resolve(import.meta.dirname, "./damai-search/main.js")],
  spawnStdioOption
);
const doubanSearchChild = spawn(
  "node",
  [resolve(import.meta.dirname, "./douban-search/main.js")],
  spawnStdioOption
);

// const children = new Set();

// children.add(damaiSearchChild).add(doubanSearchChild);

function spawnAutoEmailChild(filePathArgs) {
  const autoEmailChild = spawn(
    "node",
    [emailScriptPath, filePathArgName, filePathArgs],
    spawnStdioOption
  );
  autoEmailChild.on("close", (code) => {
    // children.delete(autoEmailChild);
    console.log(`autoMailChild子进程退出，退出码 ${code}`);
  });
  return autoEmailChild;
}

damaiSearchChild.on("close", (code) => {
  // children.delete(damaiSearchChild);
  spawnAutoEmailChild(filePathArgsDamai);
  console.log(`damaiSearchChild子进程退出，退出码 ${code}`);
});
doubanSearchChild.on("close", (code) => {
  // children.delete(doubanSearchChild);
  spawnAutoEmailChild(filePathArgsDouban);
  console.log(`doubanSearchChild子进程退出，退出码 ${code}`);
});

// console.log(parseArgs(process.argv));
