/**
 * CSE 310 - Module 2 Submission
 * Student: Omoregbe Michael Oghodo
 * Language: JavaScript (Node.js)
 */

import _ from "lodash";
import chalk from "chalk";

/**
 * Prints a formatted title to the console
 * @param {string} title
 */
function printTitle(title) {
    console.log(chalk.blue.bold("\n============================== - index.js:15"));
    console.log(chalk.green.bold(title));
    console.log(chalk.blue.bold("==============================\n - index.js:17"));
}

/**
 * Validates an array of numbers
 * Throws an error if validation fails
 * @param {Array<number>} numbers
 */
function validateNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }

    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    numbers.forEach(num => {
        if (typeof num !== "number") {
            throw new Error("Array must contain only numbers");
        }
    });
}

/**
 * Recursively calculates the factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Uses ES6 array functions to process numbers
 * @param {Array<number>} numbers
 * @returns {Object}
 */
function processNumbers(numbers) {
    const squared = numbers.map(n => n * n);
    const evenNumbers = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((total, n) => total + n, 0);

    return { squared, evenNumbers, sum };
}

/**
 * Demonstrates use of Lodash library
 * @param {Array<number>} numbers
 * @returns {Array<number>}
 */
function shuffleNumbers(numbers) {
    return _.shuffle(numbers);
}

/**
 * Main application logic
 */
function main() {
    printTitle("CSE 310 - JavaScript Module Demo");

    const numbers = [1, 2, 3, 4, 5, 6];

    try {
        validateNumbers(numbers);

        console.log(chalk.yellow("Original Numbers: - index.js:89"), numbers);

        const results = processNumbers(numbers);
        console.log(chalk.cyan("Squared: - index.js:92"), results.squared);
        console.log(chalk.cyan("Even Numbers: - index.js:93"), results.evenNumbers);
        console.log(chalk.cyan("Sum: - index.js:94"), results.sum);

        const shuffled = shuffleNumbers(numbers);
        console.log(chalk.magenta("Shuffled (Lodash): - index.js:97"), shuffled);

        const factNumber = 5;
        console.log(
            chalk.green(`Factorial of ${factNumber}:`),
            factorial(factNumber)
        );

    } catch (error) {
        console.error(chalk.red("Error occurred: - index.js:106"), error.message);
    } finally {
        console.log(chalk.blue("\nProgram execution completed. - index.js:108"));
    }
}

// Run the program
main();
