import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
let config = {
  service: "gmail",
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASS,
  },
};
let transporter = nodemailer.createTransport(config);
export default transporter;
 
