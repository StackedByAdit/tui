import { Command } from 'commander';
import fs from "fs";

export const logoutCommand = new Command("logout")
    .description('Lets user logout from the provider')
    .option('-p, --provider <providerName>', 'Name of the provider (gemini, claude etc)', '')
    .action(() => {
        const configPath = "./providers.json";

        if (!fs.existsSync(configPath)) {
            console.log("Not logged in to any provider");
            return;
        }

        fs.writeFileSync(configPath, JSON.stringify({}, null, 2));
        console.log("Logged out successfully");
    })

