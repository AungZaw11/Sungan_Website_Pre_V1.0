// test-email.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function testEmail() {
  try {
    await transporter.verify();
    console.log('✅ Email configuration is correct!');
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'azawmyint721@gmail.com',
      subject: 'Test Email',
      text: 'Hello from test!'
    });
    console.log('✅ Test email sent!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testEmail();