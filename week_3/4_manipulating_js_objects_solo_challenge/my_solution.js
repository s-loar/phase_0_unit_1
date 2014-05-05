// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.

  Pseudocode:
    DECLARE adam as an object.
    SET adam's name to "Adam"
    SET terah's spouse to adam
    SET terah's weight to 125
    DELETE terah's eye color property
    SET Adam's spouse to terah
    DECLARE terah's children as an object
    SET one of terah's children as carson that is an object who's name is "Carson".
    SET one of terah's children as carter that is an object who's name is "Carter".
    SET one of terah's children as colton that is an object who's name is "Colton".
    SET adam's children to terah's children

*/

// __________________________________________
// Write your code below.
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = { name: "Carson" };
terah.children.carter = { name: "Carter" };
terah.children.colton = { name: "Colton" };
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// My strategy was to pseudo code the solution first, then run the script in node and add code to pass the tests.
// I had questions on how to remove a property from an object, and found the answer by Googling it to a 
// Stack Exchange question where I found a solution. For adding children to terah, I just guessed at the solution 
// and adjusted my code based on the errors it generated. THis was fairly enjoyable to me, as I am enjoying
// running the tests and adding the code to make it pass. The tedious part was the pseudocode where I would have 
// preferred to use sentences like those that were already in the file.


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)