const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  // data = {to,subject,html}
  try {
    const msg = { ...data, from: "mistersimply78@gmail.com" };
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;