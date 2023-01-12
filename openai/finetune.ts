import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { Configuration, OpenAIApi } from "npm:openai";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function createFineTune(id: string) {
  const response = await openai.createFineTune({
    training_file: id,
    model: "text-davinci-003",
  });
  return response;
}

async function listFineTunes() {
  const response = await openai.listFineTunes();
  return response;
}

async function retrieveFineTune(id: string) {
  const response = await openai.retrieveFineTune(id);
  return response;
}

async function cancelFineTune(id: string) {
  const response = await openai.cancelFineTune(id);
  return response;
}

async function deleteFineTune(id: string) {
  const response = await openai.deleteModel(id);
  return response;
}

async function askFineTune(id: string, prompt: string) {
  const trainifyConfig = await Deno.readTextFile("trainify.json");
  const data = JSON.parse(trainifyConfig)["configuration"];

  const response = await openai.createCompletion({
    model: id,
    prompt: prompt,
    max_tokens: data[0]["max_tokens"],
    temperature: data[0]["temperature"],
  });
  return response;
}

export {
  createFineTune,
  listFineTunes,
  retrieveFineTune,
  cancelFineTune,
  deleteFineTune,
  askFineTune,
};
