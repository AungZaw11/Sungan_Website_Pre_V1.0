// backend/server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// ✅ CORS configuration (Keep this as is)
app.use(cors({
  origin: function(origin, callback) {
    const allowedOrigins = [
      'https://sungan-website-pre-v1-0.vercel.app',
      'https://sungan-language-dev.vercel.app',
      'http://localhost:5173',
      'http://localhost:5174',
      'https://sungan-website-pre-v1-0.onrender.com'
    ];
    
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(null, true);
    }
  },
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// ✅ REMOVED THE PROBLEM LINE: app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// ========== HEALTH CHECK ENDPOINTS ==========
app.get('/', (req, res) => {
  res.json({ success: true, message: 'SUNGAN SHIPPING Backend API', status: 'running', time: new Date().toISOString() });
});

app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'Backend is working!', time: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString(), uptime: process.uptime(), environment: process.env.NODE_ENV || 'production' });
});

// ========== CONTACT FORM ENDPOINT ==========
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('📧 Received contact request:', { name, email, messageLength: message?.length });

  if (!name || !email || !message) {
    console.log('❌ Validation failed: Missing fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('❌ Validation failed: Invalid email format');
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: 'azawmyint721@gmail.com',
    subject: `📬 New Contact Form Message from ${name}`,
    html: `/* ... your HTML template ... */`,
    text: `New Contact Form Message\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting SUNGAN SHIPPING',
    html: `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; }
        .header { background: linear-gradient(135deg, #0077BE, #dc2626); padding: 20px; text-align: center; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px; }
        .header h2 { color: white; margin: 0; }
        .label { color: #0077BE; font-weight: bold; }
        .message-box { background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 10px; }
        .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>✨ SUNGAN SHIPPING</h2>
          <p style="color: white; margin: 0;">New Contact Form Submission</p>
        </div>
        
        <div style="margin: 20px 0;">
          <p><span class="label">👤 Name:</span> ${name}</p>
          <p><span class="label">📧 Email:</span> <a href="mailto:${email}">${email}</a></p>
          <p><span class="label">💬 Message:</span></p>
          <div class="message-box">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
        
        <div class="footer">
          <p>Sent from SUNGAN SHIPPING Website Contact Form</p>
          <p>📞 +82-51-462-2227 | 📧 smd@sungan.kr</p>
        </div>
      </div>
    </body>
    </html>`,
    text: `Dear ${name},\n\nThank you for contacting SUNGAN SHIPPING. We will get back to you within 24 hours.\n\nBest regards,\nSUNGAN SHIPPING Team`
  };

  try {
    await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent to: azawmyint721@gmail.com');
    
    await transporter.sendMail(customerMailOptions);
    console.log('✅ Customer email sent to:', email);
    
    res.status(200).json({ success: true, message: 'Message sent successfully! We will contact you within 24 hours.' });
  } catch (error) {
    console.error('❌ Email error details:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.', details: process.env.NODE_ENV === 'development' ? error.message : undefined });
  }
});

// ========== 404 HANDLER ==========
app.use((req, res) => {
  console.log(`⚠️ 404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ error: 'Route not found', path: req.url, method: req.method });
});

// ========== ERROR HANDLING MIDDLEWARE ==========
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ error: 'Internal server error', message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong' });
});

// ========== START SERVER ==========
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n========================================`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`========================================\n`);
});