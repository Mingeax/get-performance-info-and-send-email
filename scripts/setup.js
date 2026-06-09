import { existsSync, copyFileSync } from "fs";

const SECRETS_PATH = "auto-email/secrets.js";
const EXAMPLE_PATH = "auto-email/secrets.example.js";

if (!existsSync(SECRETS_PATH)) {
  copyFileSync(EXAMPLE_PATH, SECRETS_PATH);
  console.log("✅ 已创建 auto-email/secrets.js，请填入真实的邮箱配置后再运行项目");
} else {
  console.log("✅ auto-email/secrets.js 已存在, 跳过");
}
