import { fetchWithConcurrency } from "./fetchConcurrency";

async function main(): Promise<void> {
  try {
    console.log("Starting tests...\n");

    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2",
    ];
    const maxConcurrency = 2;

    console.log("Fetching URLs with concurrency control...");
    const responses = await fetchWithConcurrency(urls, maxConcurrency);

    const jsonResults = await Promise.all(
      responses.map(async (res, index) => {
        if (!res.ok) {
          console.error(
            `Request ${urls[index]} failed with status ${res.status}`
          );
          return { error: `Error ${res.status}` };
        }
        return res.json();
      })
    );

    console.log("Fetched data:", JSON.stringify(jsonResults, null, 2));

    console.log("\nTests completed successfully.\n");
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}

main();
