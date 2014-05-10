// I paired  with: Darrell Jones on this challenge.




// Pseudocode
// define secretNumber
// give it a numeric value
// define password
// give it a string value
// define members as an array
// give it some string values


// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John","Teri","William","Mary"];






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// Not sure that this needs refactoring as it is fairly simple. There are just variables and their
// initial values. I did this by writing out hte pseudocode, then running the file in node and 
// then adding things to the code to pass each test.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// For this I wrote the pseudo code based on the test that were to be run against the code.
// Then I ran the solution in node to see what happened. It failed. So I had fun just adding
// what the test said it needed, and built the program that way. There were no questions or 
// issues in building this. So I feel good in having learned this compentency.
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

