import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hiworks.com',
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true, // SSL for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
    console.log('\n📧 Please check your Hiworks settings:');
    console.log(`   Host: ${process.env.SMTP_HOST || 'smtp.hiworks.com'}`);
    console.log(`   Port: ${process.env.SMTP_PORT || 465} (SSL)`);
    console.log(`   User: ${process.env.EMAIL_USER}`);
    console.log('   🔑 Make sure "Email-only password" is enabled in Hiworks\n');
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const adminMailOptions = {
    from: 'info@sungan.kr',
    to: 'info@sungan.kr',
    replyTo: email,
    subject: `📨 New Contact Message from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin:0; padding:0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7fa; }
          .container { max-width: 650px; background: #ffffff; border-radius: 16px; margin: 20px auto; box-shadow: 0 8px 40px rgba(0,0,0,0.08); padding: 40px 35px; }
          .header { text-align: center; padding-bottom: 25px; border-bottom: 4px solid #0077BE; }
          .header h1 { color: #0077BE; font-size: 30px; margin: 0; letter-spacing: 1px; }
          .header p { color: #888; font-size: 14px; margin: 6px 0 0 0; }
          .content { margin-top: 30px; }
          .info-card { background: #f8faff; border-radius: 12px; padding: 20px; border-left: 5px solid #0077BE; margin-bottom: 20px; }
          .info-card table { width: 100%; }
          .info-card td { padding: 4px 0; }
          .message-box { background: #f5f7fa; border-radius: 12px; padding: 20px; border-left: 5px solid #dc2626; margin-top: 15px; }
          .reply-box { background: #e8f0fe; border-radius: 12px; padding: 16px 20px; margin-top: 20px; text-align: center; }
          .footer { text-align: center; padding-top: 25px; border-top: 1px solid #e8ecf0; margin-top: 25px; color: #aaa; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⚓ SUNGAN SHIPPING</h1>
            <p>Your Trusted Partner in Ship Management</p>
          </div>
          <div class="content">
            <h2 style="color: #0077BE; font-size: 20px; margin: 0 0 6px 0;">📨 New Contact Form Submission</h2>
            <p style="color: #999; font-size: 13px; margin: 0 0 20px 0;">
              Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })}
            </p>

            <div class="info-card">
              <table>
                <tr><td><strong style="color: #0077BE;">👤 Name:</strong></td><td style="color: #333;">${name}</td></tr>
                <tr><td><strong style="color: #0077BE;">📧 Email:</strong></td><td><a href="mailto:${email}" style="color: #0077BE;">${email}</a></td></tr>
                <tr><td><strong style="color: #0077BE;">📅 Date:</strong></td><td style="color: #333;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })}</td></tr>
              </table>
            </div>

            <div class="message-box">
              <p style="margin: 0 0 10px 0; color: #0077BE; font-weight: bold;">💬 Message:</p>
              <p style="margin: 0; color: #333; line-height: 1.8; white-space: pre-wrap;">${message}</p>
            </div>

            <div class="reply-box">
              <p style="margin: 0; color: #0077BE; font-size: 14px;">
                💡 <strong>Reply to:</strong> <a href="mailto:${email}" style="color: #0077BE; font-weight: bold;">${email}</a>
              </p>
              <p style="margin: 4px 0 0 0; color: #666; font-size: 12px;">Click the email above to reply directly to the customer</p>
            </div>
          </div>
          <div class="footer">
            Sent from SUNGAN SHIPPING Contact Form via <strong>info@sungan.kr</strong><br>
            From: ${name} &lt;${email}&gt;<br>
            © ${new Date().getFullYear()} SUNGAN SHIPPING. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `
  };

  const customerMailOptions = {
    from: 'info@sungan.kr',
    to: email,
    subject: `Thank you for contacting SUNGAN SHIPPING`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin:0; padding:0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7fa; }
          .container { max-width: 600px; background: #ffffff; border-radius: 16px; margin: 20px auto; box-shadow: 0 8px 40px rgba(0,0,0,0.08); padding: 40px 30px; }
          .header { text-align: center; padding-bottom: 20px; border-bottom: 4px solid #0077BE; }
          .header h1 { color: #0077BE; font-size: 28px; margin: 0; letter-spacing: 1px; }
          .header p { color: #888; font-size: 14px; margin: 6px 0 0 0; }
          .greeting { margin-top: 25px; }
          .greeting p { font-size: 16px; color: #555; line-height: 1.8; }
          .message-summary { background: #f0f7ff; border-radius: 12px; padding: 20px; border-left: 5px solid #0077BE; margin-top: 20px; }
          .contact-info { background: #f8fafc; border-radius: 12px; padding: 20px; margin-top: 20px; }
          .footer { text-align: center; padding-top: 20px; border-top: 1px solid #e8ecf0; margin-top: 20px; color: #aaa; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⚓ SUNGAN SHIPPING</h1>
            <p>Your Trusted Partner in Ship Management</p>
          </div>
          <div class="greeting">
            <p>Dear <strong style="color: #0077BE;">${name}</strong>,</p>
            <p>Thank you for reaching out to <strong>SUNGAN SHIPPING</strong>.</p>
            <p>We have received your message and our team will get back to you within <strong style="color: #0077BE;">24 hours</strong>.</p>
          </div>
          <div class="message-summary">
            <p style="margin: 0 0 8px 0; color: #0077BE; font-weight: bold;">📝 Your Message Summary:</p>
            <p style="margin: 0; color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div class="contact-info">
            <p style="margin: 0 0 12px 0; color: #0077BE; font-weight: bold;">📞 Contact Us Directly:</p>
            <table style="width: 100%; font-size: 14px; color: #555;">
              <tr><td style="padding: 4px 0; width: 80px;">📱 Phone:</td><td><strong>+82-51-462-2227</strong></td></tr>
              <tr><td style="padding: 4px 0;">📧 Email:</td><td><strong>info@sungan.kr</strong></td></tr>
              <tr><td style="padding: 4px 0;">🌐 Website:</td><td><strong>www.sungan.kr</strong></td></tr>
            </table>
          </div>
          <div class="footer">
            ⚡ This is an automated response. Please do not reply to this email.<br>
            © ${new Date().getFullYear()} SUNGAN SHIPPING. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'SUNGAN SHIPPING API is running'
  });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_USER}`);
  console.log(`📤 SMTP Host: ${process.env.SMTP_HOST || 'smtp.hiworks.com'}`);
  console.log(`📨 Admin Email: info@sungan.kr`);
  console.log(`✅ Status: Ready to send emails\n`);
});

process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
});