import nodemailer from "nodemailer";
import configs from "./config.js";
import { writeFile, readFile } from "node:fs/promises";
import { basename } from "node:path";
import parseArgs from "minimist";
import {
  remove,
  ensureDir,
  emptyDir,
  outputFile,
  pathExists,
} from "fs-extra/esm";

const cmdArgs = parseArgs(process.argv);

const filePaths = cmdArgs.filePath.split(",");

const {
  email: {
    user,
    accessToken,
    service,
    title,
    content: { text, html },
  },
} = configs;

const transporter = nodemailer.createTransport({
  host: service,
  port: 465,
  secure: true,
  auth: {
    user,
    pass: accessToken,
  },
});

try {
  await transporter.verify();
  console.log("Server is ready to take our messages");
} catch (err) {
  console.error("Verification failed", err);
}

const mailOptions = {
  from: user,
  to: user,
  subject: title, // 主题
  text,
  html,
};

const fileMap = new Map();

filePaths.forEach((path) => {
  if (!pathExists(path)) return;

  const fileName = basename(path);
  const file = readFile(path, "utf8");

  fileMap.set(fileName, file);
});

Promise.allSettled(fileMap.values()).then(
  (contents) => {
    const names = Array.from(fileMap.keys());
    const textEntries = [];

    contents.forEach(({ value: content }, i) => {
      const name = names[i];
      textEntries.push([name, content]);
    });

    mailOptions.text = textEntries
      .map(([name, content]) => `${name}:\n${content}`)
      .join("\n");

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("email sent: " + info.response);
      }
    });
  },
  (err) => {
    console.log(err);
  }
);
