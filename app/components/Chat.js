"use client";
import { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') {
            alert('Please enter a message before sending.');
            return;
        }

        const userMessage = { role: 'user', content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setInput(''); // Clear the input field immediately after the user sends the message

        try {
            // Send message to GPT
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ clientInput: input }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch the response from the AI');
            }

            const data = await response.json();
            const botMessage = { role: 'assistant', content: data.reply };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error during chat:', error);
        }
    };

    return (
        <div className='flex flex-col items-center gap-4 mt-8 p-4 bg-gray-100 min-h-screen w-full'>
            <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-full bg-white shadow-lg rounded-lg border border-gray-200">
                {/* Header */}
                <div className="p-4 bg-gray-800 text-white text-center rounded-t-lg">
                    <h1 className="text-xl font-bold">Chat with Blooming Solutions AI</h1>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-100">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`p-3 rounded-lg max-w-xs w-fit break-words ${msg.role === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                                    }`}>
                                <p className="text-sm">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg flex items-center space-x-4">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
