import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { positive, error, warning, neutral } from "./console/response.ts";
import {
  uploadFile,
  listFiles,
  deleteFile,
  retrieveFile,
} from "./openai/files.ts";
import {
  listFineTunes,
  retrieveFineTune,
  cancelFineTune,
  askFineTune,
} from "./openai/finetune.ts";

const configData: Record<string, string> = await load();
const apiKey: string = configData["OPENAI_API_KEY"];

if (Deno.args[0] === "init") {
  console.log(neutral + "Initializing Trainify...");
  if (apiKey === "") {
    console.log(error + "No OPENAI_API_KEY key found in .env");
    Deno.exit(1);
  } else {
    console.log(positive + "API key found.");
  }

  try {
    await Deno.readTextFile("trainify.json");
    console.log(positive + "Found trainify.json.");
  } catch {
    console.log(warning + "trainify.json not found. Creating...");
    await Deno.writeTextFile(
      "trainify.json",
      JSON.stringify(
        {
          configuration: [
            {
              max_tokens: 256,
              temperature: 0.7,
            },
          ],
          files: [],
          models: [],
        },
        null,
        2
      )
    );
    console.log(positive + "trainify.json created.");
  }

  console.log(
    neutral + "Trainify initialized. Use 'trainify help' to get started."
  );
}

if (Deno.args[0] === "upload") {
  const response = await uploadFile(Deno.args[1]);
  console.log(response);
}

if (Deno.args[0] === "delete") {
  if (Deno.args[1] === "file") {
    const response = await deleteFile(Deno.args[2]);
    console.log(response);
  }
}

if (Deno.args[0] === "list") {
  if (Deno.args[1] === "files") {
    const response = await listFiles();
    console.log(response);
  }
  if (Deno.args[1] === "models") {
    const response = await listFineTunes();
    console.log(response["data"]);
  }
}

if (Deno.args[0] === "get") {
  if (Deno.args[1] === "file") {
    const response = await retrieveFile(Deno.args[2]);
    console.log(positive + "File info:\n");
    console.log(response);
  }

  if (Deno.args[1] === "model") {
    const response = await retrieveFineTune(Deno.args[2]);
    console.log(response);
  }
}

if (Deno.args[0] === "cancel") {
  if (Deno.args[1] === "model") {
    const response = await cancelFineTune(Deno.args[2]);
    console.log(response);
  }
}

if (Deno.args[0] === "ask") {
  console.log(
    neutral + `Asking ${Deno.args[1]}: ${Deno.args.slice(2).join(" ")}...`
  );
  const response = await askFineTune(
    Deno.args[1],
    Deno.args.slice(2).join(" ")
  );
  const text: string | undefined = response.choices[0].text;
  if (typeof text === "undefined") {
    console.log(error + "No response received.");
    Deno.exit(1);
  }
}

if (Deno.args[0] === "config") {
  console.log(neutral + "Fetching local configuration...");
  const trainifyConfig = await Deno.readTextFile("trainify.json");
  const data = JSON.parse(trainifyConfig)["configuration"];

  console.log(positive + "Max tokens: " + data[0]["max_tokens"]);
  console.log(positive + "Temperature: " + data[0]["temperature"]);
}

if (Deno.args[0] === "version") {
  console.log(neutral + "Trainify v0.1.5 alpha");
}
