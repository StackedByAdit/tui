import { Command } from 'commander';
import fs from "fs";

export const setProviderCommand = new Command("set")
    .description('Lets user set the default provider')
    .option('-p, --provider <providerName>', 'Name of the provider (gemini, claude etc)', '')
    .action((options) => {
        const configPath = "./providers.json";

        if (!fs.existsSync(configPath)) {
            console.log("Not logged in to any provider. Run login first.");
            return;
        }

        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        config.provider = options.provider;

        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(`Active provider set to ${options.provider}`);
    })