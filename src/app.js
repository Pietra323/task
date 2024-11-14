require('dotenv').config({ path: '../staticFiles/.env' });
const fs = require('fs').promises;

async function app() {
    try {
        const data = await fs.readFile(process.env.filePath, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

app();
