// Request One

// (3, 10) => [4, 6, 8]

function printEvenBetween(numOne, numTwo) {
	var numArray = [];
	for (var i = numOne + 1; i < numTwo; i++) {
		if((i % 2) == 0) {
			numArray.push(i);
		}
	}
	return numArray;
};

//Request Two

// (3, 10) => [4, 5, 6, 7, 8, 9]

function printBetween(numOne, numTwo) {
	var numArray = [];
	for (var i = numOne + 1; i < numTwo; i++) {
		numArray.push(i);
	}
	return numArray;
};