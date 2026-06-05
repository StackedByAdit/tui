import { Command } from 'commander';
import fs from "fs";

interface option {
    provider: string;
    apiKey: string;
}

export const loginCommand = new Command("login")
    .description('Lets user login into the provider (use it as default)')
    .option('-p, --provider <providerName>', 'Name of the provider (gemini, claude etc)', '')
    .option('-a, --api-key <apiKey>', 'Your api key', '')
    .action((options: option) => {

        const configPath = "./providers.json";

        let config: Record<string, string> = {};
        if (fs.existsSync(configPath)) {

            config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        }
        
        config = {
            provider: options.provider,
            api_key: options.apiKey
        };

        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(`Logged in as ${options.provider}`);
    })
