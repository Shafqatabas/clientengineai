import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const planKey = formData.get('planKey') as string;
    const selectedMethod = formData.get('selectedMethod') as string;
    const senderNumber = formData.get('senderNumber') as string;
    const trxId = formData.get('trxId') as string;
    const receiptFile = formData.get('receipt') as File | null;

    if (!senderNumber || !trxId) {
      return NextResponse.json(
        { message: 'Sender number and Transaction ID are required' },
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

    await transporter.verify();

    // Handle Image Attachment if uploaded
    let attachments: any[] = [];
    if (receiptFile && receiptFile.size > 0) {
      const arrayBuffer = await receiptFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: receiptFile.name || 'payment-receipt.jpg',
        content: buffer,
      });
    }

    const mailOptions = {
      from: `"ClientEngine AI Checkout" <${process.env.SMTP_USER || 'hello@raimarketingagency.online'}>`,
      to: 'hello@raimarketingagency.online',
      subject: `New Payment Proof Submitted - Plan: ${planKey}`,
      text: `Plan: ${planKey}\nMethod: ${selectedMethod}\nSender Number: ${senderNumber}\nTRX ID: ${trxId}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #080511; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #a855f7; border-bottom: 1px solid #334155; padding-bottom: 10px;">New Payment Proof Verification</h2>
          <p><strong>Selected Plan:</strong> ${planKey}</p>
          <p><strong>Payment Method:</strong> ${selectedMethod.toUpperCase()}</p>
          <p><strong>Sender Mobile / Account:</strong> ${senderNumber}</p>
          <p><strong>Transaction ID (TRX ID):</strong> <span style="color: #4ade80; font-family: monospace;">${trxId}</span></p>
          ${receiptFile && receiptFile.size > 0 ? '<p style="color: #38bdf8; margin-top: 15px;"><strong>Attachment:</strong> Payment receipt image is attached to this email.</p>' : '<p style="color: #94a3b8; margin-top: 15px;">No receipt image attached.</p>'}
        </div>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Payment proof sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Checkout API Error:', error);
    return NextResponse.json(
      { message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}