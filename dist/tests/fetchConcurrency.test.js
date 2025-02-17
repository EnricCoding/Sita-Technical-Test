"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchConcurrency_1 = require("../src/fetchConcurrency");
global.fetch = jest.fn((url) => Promise.resolve(new Response(JSON.stringify({ url }), { status: 200 })));
describe("fetchWithConcurrency", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => { });
    });
    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });
    it("should fetch all URLs while respecting max concurrency", async () => {
        const urls = ["https://api.test/1", "https://api.test/2", "https://api.test/3"]; // 3 URLs that doesnt exist
        const maxConcurrency = 2;
        const responses = await (0, fetchConcurrency_1.fetchWithConcurrency)(urls, maxConcurrency);
        expect(responses.length).toBe(urls.length);
        responses.forEach(res => expect(res.status).toBe(200));
    });
    it("should handle request failures gracefully", async () => {
        global.fetch.mockImplementationOnce(() => Promise.reject(new Error("Network error")));
        const urls = ["https://api.test/1"]; // This URL will fail
        const responses = await (0, fetchConcurrency_1.fetchWithConcurrency)(urls, 1);
        expect(responses[0].status).toBe(500);
    });
});
