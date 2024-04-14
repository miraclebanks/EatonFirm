require("dotenv").config();
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Route handler for contact form submission
app.post("/contactus", (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Change to EMAIL_PASS
    },
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\n\nMessage: ${message}`,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).send("Message Sent");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
