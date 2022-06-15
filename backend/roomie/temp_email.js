var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "roomieminiproject@gmail.com",
    pass: "yjdsoxxchuiiyzvp",
  },
});

var options = {
  from: "roomieminiproject@gmail.com",
  to: "roomieminiproject@gmail.com",
  subject: "Testing Mail",
  text: "This is body mail testing ",
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email is Sent." + info.response);
  }
});
