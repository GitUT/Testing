import countBy from "../src/countBy.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(countBy);

// Testing countBy function with different inputs
describe("countBy", () => {
    const users = [
        { user: "barney", active: true },
        { user: "betty", active: true },
        { user: "fred", active: false },
    ];
    const result = { true: 2, false: 1 };
    testMaker.testCase("Esimerkki", result, [users, (value) => value.active]);

    const testArray = [
        {
            x: true,
            y: false,
        },
        {
            x: true,
        },
        {
            x: true,
            y: true,
        },
    ];
    testMaker.testCase("Array of objects with x: true", { true: 3, false: 0 }, [testArray, (value) => value.x]);

    const array1 = [
        {
            y: false,
        },
        {
            y: true,
        },
    ];
    const result1 = { true: 0, false: 2 };
    testMaker.testCase("Array of objects with no x-property", result1, [array1, (x) => x.active]);
});
