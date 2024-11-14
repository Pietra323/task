export async function fetchResponse(articleData) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "Przekształć ten artykuł na format HTML. Wygeneruj kod HTML z odpowiednimi tagami do strukturyzacji treści. Dodaj placeholdery dla obrazków z tagiem <img> i atrybutem alt, zawierającym dokładny prompt do generowania grafiki."
                },
                {
                    role: "user",
                    content: articleData
                }
            ],
            max_tokens: 2000,
        }),
    });
    const data = await response.json();
    const htmlContent = data.choices[0].message.content.trim();
    console.log(htmlContent);
}
