"use client";
import { useState, useRef, useEffect } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [clientEmail, setClientEmail] = useState(''); // State to capture client email
    const [conversationEnded, setConversationEnded] = useState(false);
    const messagesEndRef = useRef(null);

    // Function to send chat messages
    const handleSend = async () => {
        if (input.trim() === '') {
            alert('Please enter a message before sending.');
            return;
        }

        const userMessage = { role: 'user', content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');

        try {
            // Send message to GPT
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ clientInput: messages.map(msg => msg.content).join('\n') + '\n' + input }),
            });

            if (!response.ok) throw new Error('Failed to fetch the response from the AI');

            const data = await response.json();
            const botMessage = { role: 'assistant', content: data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            // Display the email input and confirm button if the conversation is ready to end
            if (data.reply.toLowerCase().includes("confirm") || data.reply.toLowerCase().includes("email") || data.reply.toLowerCase().includes("send") || data.reply.toLowerCase().includes("order") || data.reply.toLowerCase().includes("services") || data.reply.toLowerCase().includes("recommendation")) {
                setConversationEnded(true);
            }
        } catch (error) {
            console.error('Error during chat:', error);
        }
    };

    // Function to confirm selection and send email
    const handleConfirm = async () => {
        if (!clientEmail) {
            alert("Please enter your email address.");
            return;
        }

        try {
            const recommendedServices = messages.map(msg => msg.content).join('\n');

            // Trigger the email API with client details and recommended services
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
            setMessages([]); // Clear the chat after confirmation
            setConversationEnded(false); // Reset conversation status
            setClientEmail(''); // Clear the email input

        } catch (error) {
            console.error("Error during confirmation:", error);
        }
    };

    return (
        <div className='flex flex-col items-center gap-4 mt-16 p-6 bg-gray-100 min-h-screen w-full'>
            <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-full bg-white shadow-lg rounded-lg border border-gray-200">
                {/* Header */}
                <div className="p-5 bg-gray-800 text-white text-center rounded-t-lg">
                    <h1 className="text-2xl font-bold">Contactați Blooming Solutions AI</h1>
                    <p className="text-sm mt-1">Spuneți-ne despre afacerea dumneavoastră și vă vom sugera cele mai bune soluții!</p>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-100" style={{ maxHeight: "400px" }}>
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
                    <div ref={messagesEndRef} />
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
            {/* Email Input and Confirm Button */}
            {conversationEnded && (
                <div className="p-4 bg-gray-100 border-t border-gray-200 flex flex-col items-center space-y-3 animate-popup">
                    <p className="text-sm text-gray-600">Te rugăm să-ți introduci adresa de email pentru a confirma serviciile.</p>
                    <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <button
                        onClick={handleConfirm}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        Confirma
                    </button>
                </div>
            )}
        </div>
    );
}
