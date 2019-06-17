"use strict";
const nodemailer = require("nodemailer");
var config = require("../../config/config")
var record = {
  businessName:"Need for Weed",
  careGiver:"Dr. O'Leary",
  date:"July 3, 2019",
  time:"1 O'Clock pm",
  location:"New City"
}
let body = `<h2>Reminder</h2><br /><h3>${record.careGiver} wants to remind you of your appointment on ${record.date} at ${record.time} at the ${record.location} office</h3><br /><h3>If you need to cancel please contact this office to reschedule.</h3><br />To your health,<br />${record.businessName}. ` // html body

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    //service:"gmail",
    //host:"dedrelay.secureserver.net",
    port: 587,
    //port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.nodeMailer.user, // generated ethereal user
      pass: config.nodeMailer.password // aws ses password
      // user:"cranni@marx.tech",
      // pass:"1qazXSW@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Chris Ranni 👻" <me@chrisranni.com>', // sender address
    to: "chris.ranni@gmail.com",
    //to: "chris.ranni@gmail.com",
    subject: "Test ✔", // Subject line
    text: "Appointment Reminder", // plain text body
    html: body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);