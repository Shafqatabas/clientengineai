import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, agency, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Hostinger SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'hello@raimarketingagency.online',
        pass: process.env.SMTP_PASS, 
      },
    });

    // Verify transporter configuration before sending
    await transporter.verify();

    const mailOptions = {
      from: `"ClientEngine AI" <${process.env.SMTP_USER || 'hello@raimarketingagency.online'}>`,
      to: 'hello@raimarketingagency.online',
      subject: `New Lead: ${name} (${agency || 'Independent'})`,
      text: `Name: ${name}\nEmail: ${email}\nAgency: ${agency || 'N/A'}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #080511; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #a855f7; border-bottom: 1px solid #334155; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Agency:</strong> ${agency || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #0f172a; padding: 15px; border-radius: 8px; border-left: 4px solid #a855f7; margin-top: 10px;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed Contact Form Error:', error);
    return NextResponse.json(
      { message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}