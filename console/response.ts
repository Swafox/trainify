import chalkin from "https://deno.land/x/chalkin@v0.1.3/mod.ts";

const neutral: string = chalkin.blue("[trainify] ");
const positive: string = chalkin.green("[trainify] ");
const warning: string = chalkin.yellow("[trainify] ");
const error: string = chalkin.red("[trainify] ");

export { positive, warning, error, neutral };
