import { Command } from "commander";
import fs from "fs";

export const modelsCommand = new Command("models")
  .description('Returns all the supported models')
  .option('-m, --model <modelName>', 'name of the model', 'all')
  .action(() => {
    const modelPath = "./model.json";

    if (!fs.existsSync(modelPath)) {
      console.log("model.json not found");
      return;
    }

    const models = JSON.parse(fs.readFileSync(modelPath, 'utf-8'));
    console.log("Available models:");
    console.log(models);
  })