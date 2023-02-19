// const express = require('express');
// const { Client } = require('pg');
// const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/mydb';
// //"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
// const client = new Client({
//     connectionString: connectionString
// });
// client.connect();
// var app = express();
// app.set('port', process.env.PORT || 4000);


// app.get('/', function (req, res, next) {
    
// client.query('SELECT * FROM Employee', function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send(result.rows);
//     });
// });
// app.listen(4000, function () {
//     console.log('Server is running.. on Port 4000');
// });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// const details = require("./details.json");



const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("The server started on port 5000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to nodemailer</h1>"
  );
});

app.post("/sendmail", (req, res) => {
//   console.log("request came");
 res.send('hi')

let user = req.body;
  console.log(req.body)
//   let user = req.body.name;
  sendMail(user, info => {
    console.log(`The mail has been sent and the id is ${info.messageId}`);
    
    res.send(info);
  });
// res.send(user)
});

function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "almeidasaachi@gmail.com",
      pass: "fykscqxoaxerumsi"
    }
  });

  let mailOptions = {
    from: 'almeidasaachi2gmail.com', // sender address
    to: user.email, // list of receivers
    subject: "Welcome", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h4>Thank You for Subscribing</h4>`
  };

  // send mail with defined transport object
  let info = transporter.sendMail(mailOptions);

  callback(info);
}