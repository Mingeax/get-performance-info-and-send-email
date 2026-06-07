export default {
  email: {
    // 以qq邮箱为例
    // TODO: 对缺失字段导致报错做log提示
    service: "smtp.qq.com", // 如 smtp.qq.com
    user: "wsyym@qq.com", // 如 xxx@qq.com
    accessToken: "orvtvemugyozbgcb", // 授权码
    // 以下字段留空
    title: "",
    content: {
      text: "",
      html: "",
    },
  },
};
