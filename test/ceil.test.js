import { expect } from "chai";
import ceil from "../src/ceil.js";

// Testing ceil function with different inputs
describe("ceil", () => {
    // Testcase ID
    let i = 1;

    function testCase(description, number, precision, result) {
        it(`${i}. ${description}`, () => {
            expect(ceil(number, precision)).to.eql(result);
            i += 1;
        });
    }

    testCase("Round up a positive number according to specified positive precision. "
        + "Number is of greater precision than specified precision", 6.333, 2, 6.34);
    testCase("Round up a negative number according to specified positive precision. "
        + "Number is of greater precision than specified precision", -9.44, 1);
    testCase("Add decimals to a positive number according to specified positive precision", 5454.5, 2, 5454.50);




    // it("adds decimals to a positive number according to precision", () => {
    //     const result = 5454.50;
    //     expect(ceil(5454.5, 2)).to.equal(result);
    // });
    // it("adds decimals to a negative number according to precision", () => {
    //     const result = -24.5000;
    //     expect(ceil(-24.5, 4)).to.equal(result);
    // });
    // it("rounds a positive number up with negative precision", () => {
    //     const result = 2200;
    //     expect(ceil(2125, -2)).to.equal(result);
    // });
    // it("rounds a negative number up with negative precision", () => {
    //     const result = -320;
    //     expect(ceil(-325, -1)).to.equal(result);
    // });
    // it("rounds a positive number up with negative precision greater than the positive number", () => {
    //     const result = 10000;
    //     expect(ceil(5.3, -4)).to.equal(result);
    // });
    // it("returns zero with negative precision greater than the negative number", () => {
    //     const result = 0;
    //     expect(ceil(-5.2, -4)).to.equal(result);
    // });
    // it("cannot round a positive number up with decimal precision", () => {
    //     // cannot use decimals as precision, false premise in original test
    //     const result = NaN;
    //     expect(ceil(333.33, 1.11)).to.eql(result);
    // });
    // it("rounds a positive integer up with positive precision", () => {
    //     const result = 325.0;
    //     expect(ceil(325, 1)).to.equal(result);
    // });
    // it("rounds a positive number up to an integer without precision", () => {
    //     const result = 1000;
    //     expect(ceil(999.99)).to.equal(result);
    // });
});
