"use client";
import { useState, useRef, useEffect } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([{ role: 'assistant', content: 'Salut! Cum te pot ajuta?' }]);
    const [input, setInput] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [conversationEnded, setConversationEnded] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state for confirm button
    const messagesEndRef = useRef(null);

    const handleSend = async () => {
        if (input.trim() === '') {
            alert('Please enter a message before sending.');
            return;
        }

        const userMessage = { role: 'user', content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');

        try {
            const messageList = "The conversation so far:\n" +
                (messages.map(msg => {
                    if (msg.role === 'user') return `Client: ${msg.content}`;
                    return `Assistant: ${msg.content}`;
                }));
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ clientInput: messages.map(msg => msg.content).join('\n') + '\n' + input }),
            });

            if (!response.ok) throw new Error('Failed to fetch the response from the AI');

            const data = await response.json();
            const botMessage = { role: 'assistant', content: data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            if (["confirm", "email", "send", "order", "services", "recommendation", "e-mail", "mail", "credentials"].some(keyword => data.reply.toLowerCase().includes(keyword))) {
                setConversationEnded(true);
            }
        } catch (error) {
            console.error('Error during chat:', error);
        }
    };

    const handleConfirm = async () => {
        if (!clientEmail) {
            alert("Please enter an email address to confirm services.");
            return;
        }

        setLoading(true); // Start loading spinner
        try {
            const recommendedServices = messages.map(msg => msg.content).join('\n');
            const emailResponse = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    clientEmail,
                    clientDetails: messages.find(msg => msg.role === 'user')?.content || '',
                    recommendedServices
                }),
            });

            if (!emailResponse.ok) throw new Error('Failed to send emails');

            alert("Your services have been confirmed! An email will be sent shortly.");
            setMessages([]);
            setConversationEnded(false);
            setClientEmail('');
        } catch (error) {
            console.error("Error during confirmation:", error);
        } finally {
            setLoading(false); // Stop loading spinner
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-10 p-6 bg-gray-50 min-h-screen w-full">
            <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-full bg-white shadow-md rounded-lg mt-5">
                {/* Header */}
                <div className="p-5 bg-teal-500/20 text-black text-center rounded-t-lg border border-teal-500">
                    <h1 className="text-2xl font-semibold">Hai să lucrăm împreună pentru succesul afacerii tale</h1>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 rounded-lg" style={{ minHeight: '400px', maxHeight: '400px' }}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`p-3 rounded-lg max-w-xs w-fit break-words ${msg.role === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800'
                                    }`}>
                                <p className="text-sm">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg flex items-center space-x-4 lg:space-y-0">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-3/5 md:w-4/5 w-fit"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors w-fit">
                        Trimite
                    </button>
                </div>
            </div>

            {/* Email Input and Confirm Button */}
            {conversationEnded && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col items-center space-y-3 w-full md:w-2/3 lg:w-1/2">
                    <p className='text-sm text-gray-600'>Introdu-ți adresa de email pentru a confirma serviciile.</p>
                    <div className="flex items-center space-x-4 w-4/5">
                        <input
                            type="email"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            placeholder="Adresa de email"
                            className="w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 border-teal-500 bg-teal-500/20"
                        />
                        <button
                            onClick={handleConfirm}
                            disabled={loading} // Disable button while loading
                            className={`px-4 py-2 rounded-lg transition-colors ${loading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600'
                                } text-white flex items-center space-x-2`}>
                            {loading ? (
                                <svg
                                    className="w-5 h-5 text-white animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                            ) : (
                                <span>Confirm</span>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
