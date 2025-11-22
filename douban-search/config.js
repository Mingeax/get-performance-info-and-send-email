import { resolve } from "path";

export const outputFileName = Object.freeze({
  bad: "bad_film",
  good: "good_film",
});

const distDirName = "dist";

const distDir = resolve(import.meta.dirname, distDirName);

export const outputFilePath = {
  bad: resolve(distDir, `${outputFileName.bad}.txt`),
  good: resolve(distDir, `${outputFileName.good}.txt`),
};
