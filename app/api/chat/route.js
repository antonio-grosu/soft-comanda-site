import { NextResponse } from 'next/server';

/**
 * Handles the POST request for the chat route.
 * @param {Request} req - The request object.
 * @returns {Response} - The response object.
 */
export async function POST(req) {
    try {
        // Get the client input from the request body
        const { clientInput } = await req.json();
        console.log('Client Input:', clientInput); // Log the client input for debugging

        // Fetch the GPT response from OpenAI API
        const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use your OpenAI API key from environment variables
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Use the GPT model you want to use
                messages: [
                    { role: "system", content: "You are an assistant for Blooming Solutions." },
                    { role: "user", content: clientInput }
                ],
            }),
        });

        // Check if the GPT response is not OK
        if (!gptResponse.ok) {
            const errorDetails = await gptResponse.text(); // Get error details from the response
            console.error('Error from GPT:', errorDetails); // Log the error details for debugging
            throw new Error('Failed to fetch GPT response'); // Throw an error to be caught in the catch block
        }

        // Parse the GPT response
        const data = await gptResponse.json();
        console.log('GPT Response:', data); // Log the full GPT response for debugging

        // Return the AI response in JSON format
        return NextResponse.json({ reply: data.choices[0].message.content });
    } catch (error) {
        // Log the error message and return an error response
        console.error('Error in API:', error.message); // Log only the error message
        return NextResponse.json({ error: 'Something went wrong with the AI response' }, { status: 500 });
    }
}
