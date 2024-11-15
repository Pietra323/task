import fs from 'fs';
export async function fetchResponse(articleData) {
    console.log(process.env.API_KEY);
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
                    content: "Przekształć ten artykuł na format HTML. Wygeneruj kod HTML z odpowiednimi tagami do strukturyzacji treści. Dodaj placeholdery dla obrazków z tagiem <img> i atrybutem alt, zawierającym dokładny prompt do generowania grafiki. Zwrócony kod powinien zawierać wyłącznie zawartość do wstawienia pomiędzy tagami <body> i </body>. Nie dołączaj znaczników <html>, <head> ani <body>."
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
    fs.writeFileSync("artykul.html", htmlContent, 'utf8');
}
