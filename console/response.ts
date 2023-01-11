import chalk from "npm:chalk";

const neutral: string = chalk.blue("[trainify] ");
const positive: string = chalk.green("[trainify] ");
const warning: string = chalk.yellow("[trainify] ");
const error: string = chalk.red("[trainify] ");

export { positive, warning, error, neutral };
