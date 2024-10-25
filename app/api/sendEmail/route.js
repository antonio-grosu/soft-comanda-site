import nodemailer from 'nodemailer';
import fetch from 'node-fetch'; // Ensure fetch is available in your environment

export async function POST(req) {
    try {
        const { clientEmail, clientDetails, recommendedServices } = await req.json();

        // Generate summaries from the AI for both the client and yourself
        const aiClientSummary = await getAISummary(clientDetails, recommendedServices, 'client');
        const aiTeamSummary = await getAISummary(clientDetails, recommendedServices, 'team');

        // Configure nodemailer with Gmail transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Send email to Blooming Solutions team with technical details
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'damiantudorchristian@gmail.com',
            subject: 'New Client Inquiry',
            text: aiTeamSummary
        });

        // Send email to client with non-technical details
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: clientEmail,
            subject: 'Your Software Solution from Blooming Solutions',
            text: aiClientSummary
        });

        // Use standard Response API to return JSON response
        return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending emails:', error);
        return new Response(JSON.stringify({ error: 'Failed to send emails' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// Function to get AI summary based on the recipient type
async function getAISummary(clientDetails, recommendedServices, recipientType) {
    const prompt = `
        You are an assistant that summarizes client inquiries for two different audiences.
        - For the client, provide a friendly, non-technical overview of the recommended services, emphasizing how they will benefit their business.
        - For the team member, provide a detailed, technical breakdown of the services being recommended.

        Client Details: ${clientDetails}
        Recommended Services: ${recommendedServices}
        
        Please provide a summary for the ${recipientType}:
    `;

    const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are an assistant that generates summaries for clients and team members.' },
                { role: 'user', content: prompt }
            ],
        }),
    });

    if (!gptResponse.ok) {
        const errorDetails = await gptResponse.text();
        console.error('Error from GPT:', errorDetails);
        throw new Error('Failed to fetch AI summary');
    }

    const data = await gptResponse.json();
    return data.choices[0].message.content;
}
