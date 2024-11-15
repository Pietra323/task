import dotenv from 'dotenv';
import fs from 'fs/promises';
import { fetchResponse } from "./fetchingResponse.js";

dotenv.config({ path: './staticFiles/.env' });

async function app() {
    try {
        const articleData = await fs.readFile(process.env.filePath, 'utf8');
        await fetchResponse(articleData);
    } catch (err) {
        console.error('Błąd podczas uruchamiania programu:', err);
    }
}

app()
