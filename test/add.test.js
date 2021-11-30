import { expect } from "chai";
import add from "../src/add.js";

// Testing add function with different inputs
describe("add", () => {
    // Testcase ID
    let i = 1;

    // Creates a test case with a description, adds two numbers using the add function
    // and compares the result to the expected result
    function testCase(description, a, b, result) {
        it(`${i}. ${description}`, () => {
            expect(add(a, b)).to.eql(result);
        });
        i += 1;
    }

    testCase("adds two positive decimal numbers together", 6.9, 9.9, 16.8);
    testCase("adds a positive decimal number and 0 together", 699.999, 0, 699.999);
    testCase("adds a positive decimal number and a negative decimal number together", 5454.5, -99.99, 5354.51);
    testCase("adds two negative decimal numbers together", -24.5, -59.9, -84.4);
    testCase("adds a negative decimal number and 0 together", -20.25, 0, -20.25);
    testCase("adds 0 and 0 together", 0, 0, 0);
});
