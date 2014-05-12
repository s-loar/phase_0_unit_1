//GROUP PROJECT
// The operations will not work when these are part of the code:
//var sum = 0;
//var mean = 0;
//var median = 0;

//array = [2,6,20,25]; // this is our example array

// *** Sum function user story ***
// 1. I need an array that contains at minimum one number
// 2. I want to put my array into a method name "sum"
// 3. I want to create an initial value of 0 for the sum
// 4. I want to iterate over each element adding the element
// to the sum, and the next element to the value of the new sum
// 5. I want to print to the command line the final sum value

var sum = function(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++){
	total += array[i]
	}

	return total;
}

//console.log(sum(array)); 

// *** Mean function user story ***
// 1. I need an array that contains at minimum one number
// 2. I want to put my array into a method name "mean"
// 3. I want to have a variable of total equal to the
// sum of the numbers in the array
// 4. I want the average value (sum / number of elements in array)
// 5. I want the function to print to the command line the result

var mean = function(array) {
	var total = sum(array);
	return total/array.length;
}

//console.log(mean(array));

// *** Median function user story ***
// 1. I need an array that contains at minimum one number
// 2. I want to put my array into a method name "mean"
// 3. I want to have the program to distinguish between
//    if there is an even number of elemets in the array
//    or there is an odd number of elements in the array
// 4. If there's an even # of elements the median should be found one way
//    If there's an odd # of elements the median should be found a different way

var median = function(array){
	array.sort(); // question: what is this for?
	if (array.length % 2 === 0) {
		var x = array.length / 2;
		var y = (array[x - 1] + array[x]) /2;
		return y;
	}
	else {
		var x = Math.floor(array.length / 2);
	}
	return array[x];
}

//console.log(median(array));

// __________________________________________
// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)