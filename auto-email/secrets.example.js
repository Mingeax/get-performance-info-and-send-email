// 复制此文件内容为 secrets.js，填入真实值:
// cp auto-email/secrets.example.js auto-email/secrets.js

// 以qq邮箱为例
export default {
  service: "smtp.qq.com", // qq邮箱 SMTP 服务器, 可换成别的服务器
  user: "",               // 邮箱地址，如 xxx@qq.com
  accessToken: "",        // 邮箱授权码（非登录密码）
};
