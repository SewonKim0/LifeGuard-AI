require("dotenv").config({ path: __dirname + "/../../.env"});
const fetch = require("node-fetch");

const key = process.env.API_KEY;

/**
 * @param {String} prompt Prompt to send to GPT-3.5
 * @returns {String} Response from GPT-3.5
 */
async function gpt(prompt) {
    // edge case checks
    if (prompt === null || prompt === undefined) {
        throw new Error("Prompt cannot be null or undefined.");
    }
    if (!key) {
        throw new Error("API key not found. Ask SEWON KIM for the api key in order to proceed with this function.");
    }

    // fetch openai API
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${key}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            n: 1,
            max_tokens: 100
        })
    })
    const json = await res.json();
    const responseText = json.choices[0].message.content;
    return responseText;
}

module.exports = gpt;