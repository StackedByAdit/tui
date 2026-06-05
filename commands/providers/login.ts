import { Command } from 'commander';
import { homedir } from 'os';
import path from "path";

export const loginCommand = new Command("login")
    .description('Lets user login into the provider (use it as default)')
    .option('-p, --provider <providerName>', 'Name of the provider (gemini, claude etc)', '')
    .option('-a, --api_key <apiKey>', 'Your api key', '')
    .action((options) => {
        console.log("logging into " + options.provider)
         const configPath = path.join(homedir())
         console.log(configPath);
    })
