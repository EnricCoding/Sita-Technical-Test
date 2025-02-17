"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const licensePlate_1 = require("../src/licensePlate");
describe("LicensePlateGenerator", () => {
    test("should generate correct numeric plates", () => {
        expect((0, licensePlate_1.generateLicensePlate)(1)).toBe("000000");
        expect((0, licensePlate_1.generateLicensePlate)(2)).toBe("000001");
        expect((0, licensePlate_1.generateLicensePlate)(999999)).toBe("999999");
    });
    test("should correctly transition to lettered plates", () => {
        expect((0, licensePlate_1.generateLicensePlate)(1000000)).toBe("00000A");
        expect((0, licensePlate_1.generateLicensePlate)(1000001)).toBe("00001A");
        expect((0, licensePlate_1.generateLicensePlate)(1099999)).toBe("99999A");
        expect((0, licensePlate_1.generateLicensePlate)(1100000)).toBe("00000B");
    });
    test("should throw an error for negative indices", () => {
        expect(() => (0, licensePlate_1.generateLicensePlate)(-1)).toThrow("Number must be positive");
    });
});
