const { assert } = require("chai");

const kek = require("../index");

describe("Juuh", () => {
    describe("Hello World", () => {
        it("should pass", () => {
            kek();
            assert.typeOf("ggg", "string");
        });
    });
});
