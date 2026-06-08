// server.js or api/contact.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS  // your app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email to admin (company)
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: 'azawmyint721@gmail.com', // Your company email
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0077BE; text-align: center;">New Contact Form Submission</h2>
        <hr style="border: none; height: 1px; background: linear-gradient(to right, #0077BE, #dc2626);" />
        
        <div style="margin: 20px 0;">
          <p><strong style="color: #0077BE;">👤 Name:</strong> ${name}</p>
          <p><strong style="color: #0077BE;">📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong style="color: #0077BE;">💬 Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 5px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
        
        <hr style="border: none; height: 1px; background: #e0e0e0;" />
        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
          Sent from SUNGAN SHIPPING Contact Form
        </p>
      </div>
    `
  };

  // Auto-reply to customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting SUNGAN SHIPPING',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="text-align: center;">
          <h2 style="color: #0077BE;">SUNGAN SHIPPING</h2>
          <p style="color: #666;">Your trusted partner in ship management</p>
        </div>
        
        <hr style="border: none; height: 1px; background: linear-gradient(to right, #0077BE, #dc2626);" />
        
        <div style="margin: 20px 0;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to SUNGAN SHIPPING. We have received your message and our team will get back to you within 24 hours.</p>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #333;">${message}</p>
          </div>
          
          <p style="margin-top: 20px;">In the meantime, you can reach us directly at:</p>
          <ul style="color: #666;">
            <li>📞 Phone: +82-51-462-2227</li>
            <li>📧 Email: smd@sungan.kr</li>
          </ul>
        </div>
        
        <hr style="border: none; height: 1px; background: #e0e0e0;" />
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
          Best regards,<br/>
          <strong style="color: #0077BE;">SUNGAN SHIPPING Team</strong>
        </p>
      </div>
    `
  };

  try {
    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!', time: new Date().toISOString() });
});

// Email test endpoint
app.post('/api/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email from Render',
      text: 'If you receive this, email is working!'
    });
    res.json({ success: true, message: 'Test email sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});