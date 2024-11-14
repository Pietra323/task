const {fetchResponse} = require("./fetchingResponse");
require('dotenv').config({ path: '../staticFiles/.env' });
const fs = require('fs').promises;

async function app() {
    try {
        const articleData = await fs.readFile(process.env.filePath, 'utf8');
        await fetchResponse(articleData);
    } catch (err) {
        console.error(err);
    }
}

app();
