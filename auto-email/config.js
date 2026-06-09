import secrets from "./secrets.js";

export default {
  email: {
    // TODO: 对缺失字段导致报错做log提示
    service: secrets.service,
    user: secrets.user,
    accessToken: secrets.accessToken,
    // 以下字段留空
    title: "",
    content: {
      text: "",
      html: "",
    },
  },
};
