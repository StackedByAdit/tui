import { Command } from 'commander';
import fs from 'fs';

export const listCommand = new Command("list")
    .description("List current logged in provider")
    .action(() => {
        const configPath = "./providers.json";

        if (!fs.existsSync(configPath)) {
            console.log("No provider logged in");
            return;
        }

        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

        if (!config.provider) {
            console.log("No provider logged in");
            return;
        }

        console.log(`Provider: ${config.provider}`);
        console.log(`API Key : ${config.api_key}`);
    })