
<h1 align="center">
  <br>
  <a href="https://i.imgur.com/eXFVqOv.png"><img src="https://i.imgur.com/eXFVqOv.png" alt="Trainify" width="200"></a>
  <br>
  Trainify
  <br>
</h1>

<h4 align="center">CLI tool for generating and using custom AI models</h4>
<p align="center">
  <a href="https://badgen.net/badge/icon/typescript?icon=typescript&label">
    <img src="https://badgen.net/badge/icon/typescript?icon=typescript&label"
         alt="Typescript">
  </a>
  <a href="https://badgen.net/badge/icon/terminal?icon=terminal&label"><img src="https://badgen.net/badge/icon/terminal?icon=terminal&label"></a>
  <a><img src="https://img.shields.io/badge/version-v0.1.0%20alpha-red"></a>
</p>

<p align="center">
  <a href="#white-paper">White paper</a> •
  <a href="#setup">Setup</a> •
  <a href="#usage">Usage</a> •
  <a href="#release">Release</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## White paper

### Concept

Trainify makes it easy to create and use custom AI models. It is built using Typescript and Deno runtime. Deno is secure by default and allows trainify to stay lightweight. Apart from creating models, trainify removes the necessary effort to set up infrastructure for using the generated models. Within 4 commands, trainify creates an API server to be used with any existing application.

All functions are executed locally and do not require any external services. The only exception is the OpenAI API, which is used to train the models. The API key is stored locally in the .env file.

Commands follow a human-native structure. For example, to list all custom models, you would run `trainify list models`. The same applies to other commands. This makes it easy to remember and use.

### Further development

List of core functionality that is currently in progress:

- API server for interacting with custom models
- Cost calculation
- Sync with local/external database
- Manual data entry
- Implement the prepare file from OpenAI tools to verify files
- Add organization support
- Error handling and input serialization
- Moderation module for user input to prevent hateful, offensive, or other content that violates the terms of service

## Disclaimer

Trainify is in early stages of development and works only with correct syntax. Most functions will output the entire response from the OpenAI API. This is to make it easier to debug and understand the API. In the future, this will be changed to a more user-friendly output. Furthermore, the code is not optimized and will be improved in the future. At the moment, the focus is on functionality.

## Setup

To run trainify, you'll need to install [Git](https://git-scm.com) and [Deno](https://deno.land/manual@v1.29.2/getting_started/installation). Additionally, generate an [OpenAI API Key](https://beta.openai.com/docs/quickstart/add-your-api-key)

```bash
# Clone this repository
$ git clone https://github.com/Swafox/trainify.git

# Create the .env file and fill the API key

cp .env.example .env

# Run the initialization script
trainify init
```

## Usage

### Models

```bash
trainify list models # List all custom models
trainify create <file_id> # Create a new model with a training file
trainify delete model <file_id> # Delete a model
trainify get model <id> # Get information about a custom model
trainify cancel <id> # Cancel a model training
trainify ask <name> <prompt> # Ask a question to the custom model
```

### Files

```bash
trainify upload <file_path> # !! Does not work yet
trainify delete file <file_id> # Delete a file
trainify list files # List all files
trainify get file <file_id> # Get information about a file
```

## Release

Trainify will be shipped as a standalone tool as soon as Deno [adds support for npm specifier compiling](https://github.com/denoland/deno/issues/15960).

## Credits

This software uses the following technologies:

- [Deno](https://deno.land/)
- [OpenAI](https://openai.com/)
- [Npm: Chalk](https://www.npmjs.com/package/chalk)

## License

GNU General Public License v3.0

## Author

> [swafox.com](https://www.swafox.com) &nbsp;&middot;&nbsp;
> GitHub [@Swafox](https://github.com/Swafox) &nbsp;&middot;&nbsp;
> Twitter [@swafox_](https://twitter.com/swafox_)
