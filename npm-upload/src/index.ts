export async function uploadFile(filename: String) {
    const fs = require("fs");
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createFile(
        fs.createReadStream(filename),
        "fine-tune"
    );
    return response;
}
