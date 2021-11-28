const assert = require('chai').assert;

const kek = require('../index');


describe('Juuh', function () {
    describe('Hello World', function() {
        it("should pass", function() {
            kek();
            assert.typeOf("ggg", "string");
        })
    })
})