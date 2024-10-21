// app/api/sendEmail/route.js
import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req) {
    const { clientEmail, clientDetails, recommendedServices } = await req.json();

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Send email to Blooming Solutions team
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'team@bloomingsolutions.com',
        subject: 'New Client Inquiry',
        text: `Client details: ${clientDetails}\n\nRecommended Services: ${recommendedServices}`
    });

    // Send email to client
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: clientEmail,
        subject: 'Your Software Solution from Blooming Solutions',
        text: `Here’s the breakdown of the recommended services for your business:\n\n${recommendedServices}\n\nEstimated Cost: $X,XXX\nTimeline: X weeks`
    });

    return NextResponse.json({ message: 'Emails sent successfully!' });
}
