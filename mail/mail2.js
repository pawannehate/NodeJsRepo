
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pawan.nehate11@gmail.com',
    pass: '#'
  }
});
  // send mail with defined transport object
var mailOptions = {
  from: 'pawan.nehate11@gmail.com',
  to: 'pawan.nehate@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
  // html: '<h1>Welcome</h1><p>That was easy!</p>'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  console.log("Message sent: %s");
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s");
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);