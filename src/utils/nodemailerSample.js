//'use strict';
const nodemailer = require("nodemailer");
//const fs = require('fs');
const pdf2base64 = require('pdf-to-base64');
//const pdfSampleMail = require('./1.pdf');
const doMainmail = async(pdfBase64String) => {
  //const pdfIn = pdfSampleMail;
  //const sixFourPdf = async(pdf) => await pdf2base64(pdf);
  console.log("PDFBASE64STRING: ", pdfBase64String);
  async function main(){
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,//465,
      secure: false,//true,
      auth:{
        user: "inta.soul@gmail.com",
        pass: "EbAnUtSa3000RaZ"
      }
    });
    transporter.verify((err,succ) => {
      err 
      ? console.log(err) 
      : console.log("Server is ready to take our messages");
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo" <inta.soul@gmail.com>',
      to: "inta.soul@gmail.com",
      subject: "Hello",
      text: "Hello World!",
      html: "<b>Hello world?!</b>",
      attachments:
      [
      // {
        //  filename: 'textPdf.pdf',
      //    filename: 'textPdf.txt',
        //  //content: await sixFourPdf(''),
      //    content: pdfBase64String,
      //    encoding:"base64"
      //  },
       {// data uri as an attachement
         // path:`data:application/pdf;base64,${await sixFourPdf()}`
          //path:`data:application/pdf;base64,aGVsbG8gd29ybGQ`
          path:`data:application/pdf;base64,${pdfBase64String}`
          //path:`data:text/plain;base64,aGVsbG8gd29ybGQ`
        },
      ]
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
  main().catch(console.error)
};
//doMainmail();
module.exports = doMainmail;
