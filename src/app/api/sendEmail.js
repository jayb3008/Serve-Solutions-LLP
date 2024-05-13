// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { value } = req.body;

    // Use nodemailer to send the email
    const transporter = nodemailer.createTransport({
      // configure your email service here
    });

    try {
      // Send email
      await transporter.sendMail({
        from: 'your@example.com',
        to: 'serveseolutions3008@gmail.com',
        subject: 'Subject of the email',
        text: `Value: ${value}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
