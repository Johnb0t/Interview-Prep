// Request One

// (4, 4) => true
// (4, 3) => false
// (2, 3) => false

function greatThanThree(numOne, numTwo) {
	if ((numOne > 3) && (numTwo > 3)) {
		return true;
	} else {
		return false;
	}
}

// Request Two

// a = true, b = true, else = false

function aOrB(letter) {
	if((letter == "a") || (letter == 'b')) {
		return true;
	} else {
		return false;
	}
}

// Request Three

// 2 = true, else = false

function greatThanTwo(num) {
	if (num == 2){
		return true;
	} else {
		return false;
	} 
}