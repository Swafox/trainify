import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { Configuration, OpenAIApi } from "npm:openai";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function moderation(prompt: string) {
  const response = await openai.createModeration({
    input: prompt,
  });
  return response;
}

export { moderation };
