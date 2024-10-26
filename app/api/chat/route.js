export async function POST(req) {
    try {
        const { clientInput } = await req.json();
        console.log('Client Input:', clientInput);

        const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: "system",
                        content: `
                        You are a Blooming Solutions assistant, helping clients choose the right software solutions based on their needs. 
                        Below is a list of services, their price ranges, and guidelines for offering discounts on additional services.

                        Service List and Pricing
                        1. Websites: $100 - $600. Simple, fast websites with few updates; pricing depends on the number of pages.
                        2. Blogs: $300 - $1,000. Content-driven sites with CMS integration; higher-end options include design, SEO, and plugin setup.
                        3. Social Media Administration: $20 - $250/month. Includes regular posting, engagement management, and audience growth strategies.
                        4. Custom Dynamic Websites: $600 - $3,000+. Interactive sites needing custom features or frequent updates, with pricing based on complexity.
                        5. Web Platforms and Applications: $2,000 - $15,000+. For membership platforms or e-commerce, requiring substantial backend and frontend work.
                        6. Desktop Applications: $1,000 - $10,000+. Installable software for specific business needs; price varies based on OS compatibility and complexity.
                        7. Phone Applications: $2,000 - $30,000+. Mobile apps for Android/iOS, ranging widely due to features, design, and support needs.
                        8. Security Systems Installation: $400 - $4,000+. Physical security system installation; pricing includes equipment and setup and may vary by location.
                        9. ERP Solutions: $5,000 - $50,000+. Centralized systems for managing company operations; price varies based on modules and customization.
                        10. RPA (Robotic Process Automation): $2,000 - $20,000+. Automates repetitive tasks; often requires consulting and customization.
                        11. Robotics and Automation: $5,000 - $100,000+. Customized solutions for industries like manufacturing; pricing depends on equipment and project scope.

                        Discount Structure:
                        - If a client selects an Web Platform, Application, ERP Solution, or RPA System, smaller services like blogs or social media administration are included at no additional cost.
                        
                        **Guidelines:**
                        - Engage with clients to understand their business size, industry, and primary goals.
                        - Recommend solutions based on their needs and budget, clearly explaining each option. Do offer discounts on additional services.
                        - The prices are estimates; provide a range based on the client's requirements. A detailed quote will be provided after further discussion. If the client is unsure, recommend a consultation.
                        - If the client selects a qualifying service, inform them about complimentary services as a value-add.
                        - Guide the client to confirm their selections when ready.
                        - Do not oversell or pressure clients into services they do not need.
                        - You will need to learn the Client's name, budget, company size, industry, and primary goals to provide accurate recommendations.
                        - Talk in the client's language, avoiding technical jargon unless necessary and transform the prices into the client's currency.

                        Your goal is to provide helpful, relevant recommendations and lead clients toward confirming their order.
                        `
                    },
                    { role: "user", content: clientInput }
                ],
            }),
        });

        if (!gptResponse.ok) {
            const errorDetails = await gptResponse.text();
            console.error('Error from GPT:', errorDetails);
            throw new Error('Failed to fetch GPT response');
        }

        const data = await gptResponse.json();
        console.log('GPT Response:', data);

        return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in API:', error.message);
        return new Response(JSON.stringify({ error: 'Something went wrong with the AI response' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
