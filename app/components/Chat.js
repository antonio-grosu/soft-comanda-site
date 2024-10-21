// app/components/Chat.js
"use client";
import { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // app/components/Chat.js
    const handleSend = async () => {
        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);
        setInput('');

        // Send message to GPT
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientInput: input }),
        });

        const data = await response.json();
        const botMessage = { role: 'assistant', content: data.reply };
        setMessages([...messages, userMessage, botMessage]);

        // Trigger the email API after chat completion
        await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clientEmail: 'client@example.com', // Client's email
                clientDetails: input, // What the client described
                recommendedServices: data.reply // AI-generated services
            }),
        });
    };


    return (
        <div className='flex flex-col items-center gap-4 mt-8 p-4 bg-gray-100 rounded-lg shadow-md min-h-screen w-full md:w-1/2 mx-auto'>
            <h1 className='text-2xl font-bold'>Chat with Blooming Solutions AI</h1>
            <div className='w-full h-96 overflow-y-auto p-4 bg-white rounded-lg shadow-md'>
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.role}:</strong> {msg.content}</p>
                ))}
            </div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your business needs..."
                className='p-2 w-1/2 rounded-md border border-gray-300 shadow-md h-10'
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}
