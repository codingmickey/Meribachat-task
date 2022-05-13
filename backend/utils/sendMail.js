import nodemailer from 'nodemailer';

const sendMail = (name, email) => {
  const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  console.log(process.env.MAIL_USERNAME, process.env.MAIL_PASSWORD);

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: 'Registration Successful',
    html: 'Hello ' + name + ', Thank you for registering with us!',
  };

  mailer.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.status(400);
      throw new Error('Email Invalid');
    }
  });
};

export default sendMail;
