import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { Configuration, OpenAIApi } from "npm:openai";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function listFiles() {
  const response = await openai.listFiles();
  return response;
}

async function deleteFile(id: string) {
  const response = await openai.deleteFile(id);
  return response;
}

async function retrieveFile(id: string) {
  const response = await openai.retrieveFile(id);
  return response;
}

async function retrieveFileContent(id: string) {
  const response = await openai.downloadFile(id);
  return response;
}

export { listFiles, deleteFile, retrieveFile, retrieveFileContent };
