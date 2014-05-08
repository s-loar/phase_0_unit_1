// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Steve Loar
//  2. Anthony Edwards Jr


// 1. "YOU SIGNED... WHO?!"
var denzelWashington = { name: "Denzel Washington", age: 35, quote: "My Man!" };
var tomHanks = { name: "Tom Hanks", age: 50, quote: "I love all my movies." };
// test that it worked
console.log(denzelWashington.quote);


// 2. "Here they Come!"
var adamSandler = {name: "Adam Sandler", age: 47, quote: "That's your home! Are you too good for your home?!" };
var kristenBell = {name: "Kristen Bell", age: 33, quote: "Do you wanna build a snowman?" };
var jimCarrey = {name: "Jim Carrey", age: 52, quote: "...So you're telling me there's a chance? YEAH!" };
// test that it works
console.log(adamSandler.quote);


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!
// Create a Client class
function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
// run the tests to show that what we did was correct
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");


// 4. "SHOW 'EM OFF!"
console.log(adamSandler.name + " " + adamSandler.age + " " +  adamSandler.quote);
console.log(kristenBell.name + " " + kristenBell.age + " " +  kristenBell.quote);
console.log(jimCarrey.name + " " + jimCarrey.age + " " +  jimCarrey.quote);

// add function showQuote() to one client
adamSandler.showQuote = function() {
    console.log(this.name + ", age " + this.age + ", was heard saying \"" +  this.quote + "\"");
};

// Try out the new function
adamSandler.showQuote();


// ** BONUS **


//  Your Reflection:
// This pairing session did not work as smoothly as my last GPS did. But that is to be expected, as not
// everyone is the same. Plus I was eager to get through the session quickly and get on to other units 
// and my pair had not done any earlier units and was unfamiliar with JavaScript classes. That said,  
// things did not flow too smoothly for us. For example when I navigated, and gave suggestion to do, 
// or corrections, to bugs, they were ignored by my pair. When I drove, I had to explain a lot of 
// JavaScript stuff so I felt our time pairing was not very productive. I also think I was rushing 
// through the material and my pair pointed out things I missed, which was good. I do feel that we 
// were getting the hang of working with each other in the last 15 minutes or so and if we were 
// working together longer or another time, then things would go much better.





