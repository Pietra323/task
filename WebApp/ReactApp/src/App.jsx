import { useState } from "react";
import "./App.css";

function generateTemplate() {
    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport">
            <title>Podgląd szablonu</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                }
            </style>
        </head>
        <body>
        </body>
        </html>
    `;
}

function generateFullHTML(article) {
    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport">
            <title>Podgląd artykułu</title>
        </head>
        <body>
            ${article}
        </body>
        </html>
    `;
}

function saveFile (fileName, data) {
    const blob = new Blob([data], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}

function App() {
    const [article, setArticle] = useState("");

    return (
        <div id="app">
            <textarea
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                rows="10"
                cols="50"
                placeholder="Wprowadź artykuł HTML"
            ></textarea>
            <br />
            <div className="button-container">
                <button onClick={() => saveFile("szablon.html", generateTemplate())}>
                    Pobierz szablon
                </button>
                <button onClick={() => saveFile("podglad.html", generateFullHTML(article))}>
                    Pobierz podgląd artykułu
                </button>
            </div>
        </div>
    );
}

export default App;
