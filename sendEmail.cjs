
const nodemailer = require('nodemailer');
require('dotenv').config();

// Step 1: Create a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service like Yahoo, Outlook, etc.
    auth: {
        user: 'iamshibila100@gmail.com', // your Gmail address
        pass: 'wuds xpyc hxlv uphx'   // your Gmail password
    }
});

// Step 2: Set up the email data
let mailOptions = {
    from: 'iamshibila100@gmail.com', // sender address
    to: 'ashin209@gmail', // list of receivers
    subject: 'Assignment Nodejs nodemailer', // Subject line
    text: 'This is send thrtough nodemailer by Shibila sherin plus your Shibilasherin22@gmail.com !', // plain text body
    html: '<b>This is send thrtough nodemailer assignment!</b>' // html body
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
