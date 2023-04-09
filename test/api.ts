const { moderation } = await import("../openai/moderation.ts");

Deno.test("Moderation identifies no hate", async () => {
    const response = await moderation("This is a test");
    if (response.results[0].categories.hate !== false) {
        throw Error("hate should be false");
    }
});
