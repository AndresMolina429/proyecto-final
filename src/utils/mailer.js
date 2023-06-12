const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'andresg.molina429@gmail.com',
    pass: 'fkjmgcmxponhbdrg',
  },
});

module.exports = transporter;
