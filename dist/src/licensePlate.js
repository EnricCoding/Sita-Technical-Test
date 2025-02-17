"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLicensePlate = generateLicensePlate;
function generateLicensePlate(n) {
    if (n < 1)
        throw new Error("Number must be positive"); //
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const TOTAL_LETTERS = alphabet.length;
    const NUMERIC_LIMIT = 999999;
    const SINGLE_LETTER_THRESHOLD = 100000;
    if (n <= NUMERIC_LIMIT) {
        return formatNumericPlate(n);
    }
    n -= NUMERIC_LIMIT;
    const singleLetterCombinations = TOTAL_LETTERS * SINGLE_LETTER_THRESHOLD;
    if (n <= singleLetterCombinations) {
        return formatSingleLetterPlate(n, alphabet);
    }
    n -= singleLetterCombinations;
    return formatAlphaNumericPlate(n, 4, 2, alphabet);
}
function formatNumericPlate(n) {
    return n === 999999
        ? n.toString().padStart(6, "0")
        : (n - 1).toString().padStart(6, "0");
}
function formatSingleLetterPlate(n, alphabet) {
    const letterIndex = Math.floor((n - 1) / 100000);
    const number = (n - 1) % 100000;
    return number.toString().padStart(5, "0") + alphabet[letterIndex];
}
function formatAlphaNumericPlate(n, numDigits, letterCount, alphabet) {
    const numPart = n % 10 ** numDigits;
    const letterPart = Math.floor(n / 10 ** numDigits);
    return (numPart.toString().padStart(numDigits, "0") +
        generateLetters(letterPart, letterCount, alphabet));
}
function generateLetters(index, length, alphabet) {
    let letters = "";
    while (length--) {
        letters = alphabet[index % alphabet.length] + letters;
        index = Math.floor(index / alphabet.length);
    }
    return letters;
}
