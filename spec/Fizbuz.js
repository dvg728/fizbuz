//Test specification for the fizbuz program
var fb = require('../fizbuz');

describe("A program that implements fizbuz", function() { //jasmine framework

	it("can count from 1 to 5", function() {
		expect(fb.count(1, 5)).toBe("1 2 3 4 5");
	});

});