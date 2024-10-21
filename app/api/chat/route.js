// app/api/chat/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { clientInput } = await req.json();

    const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "system", content: "You are an assistant for Blooming Solutions." },
            { role: "user", content: clientInput }]
        })
    });

    const data = await gptResponse.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
}
