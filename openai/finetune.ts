import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { FineTuneOptions, OpenAI } from "https://deno.land/x/openai@1.3.0/mod.ts";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

const openAI = new OpenAI(apiKey);

async function createFineTune(id: FineTuneOptions) {
  const response = await openAI.createFineTune(id);
  return response;
}

async function listFineTunes() {
  const response = await openAI.listFineTunes();
  return response;
}

async function retrieveFineTune(id: string) {
  const response = await openAI.retrieveFineTune(id);
  return response;
}

async function cancelFineTune(id: string) {
  const response = await openAI.cancelFineTune(id);
  return response;
}

async function askFineTune(id: string, prompt: string) {
  const trainifyConfig = await Deno.readTextFile("trainify.json");
  const data = JSON.parse(trainifyConfig)["configuration"];

  const response = await openAI.createCompletion({
    model: id,
    prompt: prompt,
    maxTokens: data[0]["max_tokens"],
    temperature: data[0]["temperature"],
  });
  return response;
}

export {
  createFineTune,
  listFineTunes,
  retrieveFineTune,
  cancelFineTune,
  askFineTune,
};
