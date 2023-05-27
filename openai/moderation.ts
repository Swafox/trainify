import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { OpenAI } from "https://deno.land/x/openai@1.3.4/mod.ts";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

const openAI = new OpenAI(apiKey);

async function moderation(prompt: string) {
  const response = await openAI.createModeration(prompt);
  return response;
}

export { moderation };
