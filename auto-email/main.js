import nodemailer from "nodemailer";
import configs from "./config.js";

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

const mailOptions = {
  from: user,
  to: user,
  subject: title, // 主题
  text,
  html,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

try {
  await transporter.verify();
  console.log("Server is ready to take our messages");
} catch (err) {
  console.error("Verification failed", err);
}
