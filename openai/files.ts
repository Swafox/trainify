import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { OpenAI } from "https://deno.land/x/openai@1.3.4/mod.ts";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

const openAI = new OpenAI(apiKey);

async function uploadFile(file: string) {
  const response = await openAI.uploadFile(file, "fine-tune");
  return response;
}

async function listFiles() {
  const response = await openAI.listFiles();
  return response;
}

async function deleteFile(id: string) {
  const response = await openAI.deleteFile(id);
  return response;
}

async function retrieveFile(id: string) {
  const response = await openAI.retrieveFile(id);
  return response;
}

export { deleteFile, listFiles, retrieveFile, uploadFile };
