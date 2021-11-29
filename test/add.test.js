import { expect } from "chai";
import add from "../src/add.js";

// Testing add function with different inputs
describe("add", () => {
    it("adds two positive decimal numbers together", () => {
        const result = 16.8;
        expect(add(6.9, 9.9)).to.eql(result);
    });
    it("adds a positive decimal number and 0 together", () => {
        const result = 699.999;
        expect(add(699.999, 0)).to.eql(result);
    });
    it("adds a positive decimal number and a negative decimal number together", () => {
        const result = 5354.51;
        expect(add(5454.5, -99.99)).to.eql(result);
    });
    it("adds two negative decimal numbers together", () => {
        const result = -84.4;
        expect(add(-24.5, -59.9)).to.eql(result);
    });
    it("adds a negative decimal number and 0 together", () => {
        const result = -20.25;
        expect(add(-20.25, 0)).to.eql(result);
    });
});
