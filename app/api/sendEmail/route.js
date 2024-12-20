import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { clientEmail, clientDetails, recommendedServices } = await req.json();

        // Generate individual summaries for the client and team
        const aiClientSummary = await getClientSummary(clientDetails, recommendedServices);
        const aiTeamSummary = await getTeamSummary(clientDetails, recommendedServices);

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
            to: process.env.EMAIL_USER,
            subject: `Client Summary for ${clientEmail}`,
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

// Function to get client-friendly AI summary in an invoice-like format
async function getClientSummary(clientDetails, recommendedServices) {
    const clientPrompt = `
        You are an assistant creating a summary for a client in the style of a Romanian factura (invoice).
        Format the summary with sections including "Client Details," "Service Description," "Total Estimated Cost," and "Estimated Timeline."
        Make sure to keep the language non-technical, focus on the business benefits, and present it in an easy-to-read structure.

        At the end of the summary, include a friendly closing message to thank the client for considering Blooming Solutions and the invoice.
        ---------------------------------------------------
                         Invoice Summary
        ---------------------------------------------------

        **Client Details:**
        ${clientDetails}

        **Service Description:**
        ${recommendedServices}

        **Total Estimated Cost:** $X,XXX (fill in with a realistic cost)

        **Estimated Timeline:** X weeks (fill in with a realistic timeline)

        If you have any questions or need further details, please don't hesitate to reach out at +40771070201, or +40747738250. We appreciate your consideration and look forward to working with you!

        ---------------------------------------------------
    `;

    // Call AI helper function and return the response
    const aiResponse = await getAISummary(clientPrompt);
    return aiResponse;
}

// Function to get team-specific technical AI summary
async function getTeamSummary(clientDetails, recommendedServices) {
    const teamPrompt = `
        You are a technical assistant summarizing service recommendations for the internal team.
        Please provide a detailed, technical breakdown of each recommended service, including specific
        features, requirements, and considerations relevant to implementing these solutions.

        Client Details: ${clientDetails}
        Recommended Services: ${recommendedServices}

        Please ensure the summary includes technical details, potential challenges, and any additional information that would be relevant for the team to know.

        ---------------------------------------------------
        Technical Summary for Internal Team 

        **Service Recommendations:**
        - Service 1: Details
        - Service 2: Details
        - Service 3: Details
        , etc.

        **Technical Considerations:**
        - Consideration 1
        - Consideration 2
        - Consideration 3

        **Legal and Compliance Requirements:**
        - Requirement 1
        - Requirement 2
        - Requirement 3

        **Implementation Challenges:**
        - Challenge 1
        - Challenge 2
        - Challenge 3

        **Email Client:** ${clientDetails}

        ---------------------------------------------------
    `;

    return await getAISummary(teamPrompt);
}

// Helper function to send request to AI model
async function getAISummary(prompt) {
    const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You generate specific summaries for clients and internal teams based on given prompts.' },
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
