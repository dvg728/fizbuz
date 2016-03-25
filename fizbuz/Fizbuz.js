var count, fizzer, buzzer, fizzbuzzer;
count = function(start, end) 
	//initialize output variable
	var output = buzzer(fizzer(start));

	//modify output to contain the desired sequence
	for(var i = start; i < end; i+= 1 ) {
		output = output + " " + fizzer(i + 1) + buzzer(i + 1);
	};

	//return the output
	return output;

};

fizzer = function(num) {=

};

buzzer = function(num) {=
};

	return 0 === num % 3 ? "fizz" : num;
};

exports.buzzer = function(num) {
	return 0 === num % 5 ? "buzz" : num;
};

exports.fizzbuzzer = function(num) {

}


	/*
		//stuff here gets repeated
		output = output + " " + (counter + 1);
	}

	//return the output, e.g. "1 2 3 4 5"
	return output;
}/*

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
module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fuzzbuzzer: fizzbuzzer
};