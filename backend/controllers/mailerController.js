const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525, //25,
  // secure: false,
  //service: 'gmail',
  auth: {
    user: "0b0e1c0f2b8bed",
    pass: "112fea471262a2",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

var mailOptions = {
  from: "lucascassand@outlook.com",
  to: "lucascassan.pro@gmail.com",
  subject: "Nouvelle candidature",
  text: "TEXT",
  attachments: [{ filename: "attachment.txt", content: data }],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
