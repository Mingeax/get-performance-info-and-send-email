# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目简介

Node.js 脚本集合，从演艺平台（大麦网、豆瓣豆列）抓取演出/电影信息，按规则筛选后通过邮件推送到指定邮箱。

## 常用命令

```bash
# 全流程运行（并发爬取，完成后发送邮件）
pnpm start

# 单独运行各模块
pnpm start:damai    # 大麦网搜索
pnpm start:douban   # 豆瓣电影列表
pnpm start:email    # 发送邮件（需先有 dist/ 输出文件）
```

## 架构

项目分三个独立模块，`main.js` 用 `child_process.spawn` 并发启动前两个，两者都退出后再启动邮件模块：

```
damai-search ──┐
               ├──(都完成后)──► auto-email
douban-search ─┘
```

### damai-search

- `main.js` → 调用 `req.js` 的 `fetchAllPages()`
- `captcha.js` → `Crawler` 类，用 Puppeteer（non-headless）+ stealth 插件打开真实浏览器，通过监听 network response 截获 `searchajax.html` 的 JSON 响应，规避阿里云反爬。**需要用户手动完成滑块验证码**，可设置超时时间。
- `req.js` → 分页请求大麦搜索 API，对每条演出按关键词（`config.js`）等筛选条件分类为 `goodPerformances` / `badPerformances`，输出 JSON 到 `dist/`
- `config.js` → 搜索城市、时间范围、黑白名单关键词、输出路径等配置项

### douban-search

- 直接 `fetch` 爬取豆列页面（无需浏览器），用 JSDOM 解析 HTML
- 筛选规则：豆瓣评分、场馆等
- 分页：每页若干条, 可配置，遍历至列表为空

### auto-email

- 用 nodemailer 通过 SMTP 465 端口发送邮件
- 通过 `--filePath` 参数接收逗号分隔的文件路径列表，读取内容拼接为邮件正文
- `config.js` 需手动填写 SMTP 服务器、账号、授权码（当前为空）

## 配置说明

- `auto-email/config.js`：填写邮箱 SMTP 信息（service/user/accessToken）
- `damai-search/config.js`：城市、时间范围（`st`/`et`）、黑白名单关键词等配置项
- 输出文件均在各模块的 `dist/` 子目录下，每次运行前会清空

## 注意事项

- 大麦搜索依赖 Puppeteer 打开真实浏览器窗口，运行环境需有图形界面
- 若大麦接口被阿里云拦截，需先在 `search.damai.cn` 手动过若干次验证码，再运行脚本
- 豆瓣豆列 URL 硬编码在 `douban-search/main.js` 的 `baseUrl` 变量中
