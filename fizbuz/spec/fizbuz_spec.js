//Test specification for the fizbuz program
var fb = require('../fizbuz');

describe("A program that implements fizbuz", function() { //jasmine framework

	it("can count and make fizzbuzz replacements", function()) {
		expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
		expect(fb.count(8,12)).toBe("8 fizz buzz 11 fizz");
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz");
	}

	it("can count from 1 to 5", function() {
		expect(fb.count(1, 5)).toBe("1 2 3 4 5");
	});

	it("can take a number return 'fizz' if its a multiple of 3 and the number otherwise ", function() {
		expect(fb.fizzer(3)).toBe("fizz");
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(3)).toBe("fizz");


	it("can take a number return 'buzz' if its a multiple of 3 and the number otherwise ", function() {
		expect(fb.fizzer(3)).toBe("buzz");

	
	/*

	it("can count from 1 to 7", function() {
		expect(fb.count(1, 7)).toBe("1 2 3 4 5 6 7");

	it("can determine if one number is divisible by another", function()) {
		expect(fb.predicate(6,3)).toBe(true);
		expect(fb.predicate(5,3)).toBe(false);
		expect(fb.predicate(15,3)).toBe(true);
		expect(fb.predicate(17,3)).toBe(false);
	}

});


/*

exports.count = function(start, end) {
	//initialize output variable
	var output;

	//modify output to contain the desired sequence
	for(var counter = start; counter <= end; counter += 1 ) {
		//stuff here gets repeated
		output = output + " " + (counter + 1);
	}

	//return the output, e.g. "1 2 3 4 5"
	return output;
}/*