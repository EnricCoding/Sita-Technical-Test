"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchConcurrency_1 = require("./fetchConcurrency");
const licensePlate_1 = require("./licensePlate");
async function main() {
    try {
        console.log("Starting tests...\n");
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/todos/2",
        ];
        const maxConcurrency = 2;
        console.log("Fetching URLs with concurrency control...");
        const responses = await (0, fetchConcurrency_1.fetchWithConcurrency)(urls, maxConcurrency);
        const jsonResults = await Promise.all(responses.map(async (res, index) => {
            if (!res.ok) {
                console.error(`Request ${urls[index]} failed with status ${res.status}`);
                return { error: `Error ${res.status}` };
            }
            return res.json();
        }));
        console.log("Fetched data:", JSON.stringify(jsonResults, null, 2));
        console.log("\n──────────────────────────────────────────\n");
        console.log("Generating license plates.....");
        const testCases = [
            { input: 1, expected: "000000" },
            { input: 2, expected: "000001" },
            { input: 999999, expected: "999999" },
            { input: 1000000, expected: "00000A" },
            { input: 1000001, expected: "00001A" },
            { input: 1099999, expected: "99999A" },
            { input: 1100000, expected: "00000B" },
        ];
        testCases.forEach(({ input, expected }) => {
            const result = (0, licensePlate_1.generateLicensePlate)(input);
            console.log(`Input: ${input}, Result: ${result}, Expected: ${expected}, Matches: ${result === expected}`);
        });
        console.log("\nTests completed successfully.\n");
    }
    catch (error) {
        console.error("An unexpected error occurred:", error);
    }
}
main();
