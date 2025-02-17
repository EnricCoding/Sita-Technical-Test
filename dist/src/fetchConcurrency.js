"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithConcurrency = fetchWithConcurrency;
async function fetchWithConcurrency(urls, maxConcurrency) {
    const results = [];
    const queue = [];
    async function fetchUrl(url, index) {
        try {
            results[index] = await fetch(url);
        }
        catch (error) {
            console.error(`Error fetching ${url}:`, error);
            results[index] = new Response(null, {
                status: 500,
                statusText: "Fetch Error",
            });
        }
    }
    for (let i = 0; i < urls.length; i++) {
        const fetchPromise = fetchUrl(urls[i], i).finally(() => {
            queue.splice(queue.indexOf(fetchPromise), 1);
        });
        queue.push(fetchPromise);
        if (queue.length >= maxConcurrency) {
            await Promise.race(queue);
        }
    }
    await Promise.all(queue);
    return results;
}
