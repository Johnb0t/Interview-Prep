// Request One

// fib sequence = 0,1,1,2,3,5,8,13,21,34,55.......

// 8 = 5 + 3
//

function fib(n) {
	if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var resultsArray = fib(n - 1);
    resultsArray.push(resultsArray[resultsArray.length - 1] + resultsArray[resultsArray.length - 2]);
    return resultsArray;
  }
}