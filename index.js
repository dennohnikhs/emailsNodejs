const express = require("express");
const path = require("path");
const nodeMailer = require("nodemailer");
const fs = require("fs");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.get("/", (req, res) => {
  res.send("server started");
});

let data = fs.readFileSync(path.resolve(__dirname, "./views/index.html"), {
  encoding: "utf-8",
});

async function main() {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "davidsonlangat316@gmail.com",
      pass: "dmifebjdaorhqhrd",
    },
  });

  let info = await transporter.sendMail({
    from: '"Mohammed Nuur 👻" <davidsonlangat316@gmail.com>',
    to: '"langat" davidsonlangat2021@gmail.com,"lucy" ladylucyciku@gmail.com   ',
    subject: "Internship application reply #ZUMI ✔",
    html: data,
  });
  console.log("Message %s sent: %s", info.messageId, info.response);
}
main();

app.listen(3000, function () {
  console.log("Server is running ");
});
