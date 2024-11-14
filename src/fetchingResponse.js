const fs = require("fs");
async function fetchResponse(articleContent) {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Przekształć poniższy artykuł na format HTML...`,
            max_tokens: 2000,
        }),
    });
    const data = await response.json();
    const htmlContent = data.choices[0].text.trim();

    fs.writeFileSync("artykul.html", htmlContent);
}