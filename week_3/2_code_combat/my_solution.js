// I worked on this challenge [by myself, with:] Myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Title: Rescue Mission
// Pseudocode:
// Edit the code to get Thorin to attack the ogre
// delete line 6
// move up
// move up
// move right
// move right
// move down
// attack enemy
// Code:
this.moveDown();
this.moveDown();
this.moveRight();
// Added this code
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
// Title: Grab the Mushroom
// pseudocode:
// move up
// move right
// move left
// move up
// attach enemy
// Code:
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Title: Drink Me
// pseudocode:
// attack enemy
// move right
// move down
// move up
// move right
// attack enemy
// Code:
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Title: Taunt the Guards
// pseudocode:
// move right
// bust down the bustDownDoor
// move right
// taunt the Guard
// move left
// move left
// ask Phoebe to attack
// move right
// ask Phoebe to follow
// move right
// move right
// move up
// move right
// taunt Guard
// move down
// move down
// move right
// move up
// move right 

// Code:
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey There!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
// Title: It's a Trap
// pseudocode:
// move down
// move down 
// say something
// move up
// move up

// Code:
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

// Title: Break the Prison
// pseudocode:
// if name equals William return true
// if name equals Krogg return false
// if name equals Lucas return true
// if name equals Brack return false
// if name equals Marcus return true
// if name equals MARCUS return false
// if name equals Gordon return true
// else return true

// Code:
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if( name === "Brack")
    return false;
if(name === "Marcus" )
    return true;
if( name === "MARCUS")
    return false;
if( name === "Gordon")
    return true;
return true;

// Title: Taunt
// pseudocode:
// taunt 4 times

//Code:
this.say("Hey!");
this.say("Like your shoes!");
this.say("Hey there!");
this.say("Who's your daddy?");

// Title: Cowardly Taunt
// pseudocode:
// move to spot near ogres
// say something
// move to safe spot

// Code:
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(53,31);

// Say something!
this.say("Hey there!");

// Then run back behind the arrow towers for safety.
this.moveXY(70,10);

// Title: Commanding Followers
// pseudocode:
// tell the troops to follow
// go close to enemy
// tell the troops to attack
// move away

// Code:
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("follow me!");
this.moveXY(62,42)
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("Attack!");
// Make sure Tharin is safe!
this.moveXY(70,51

// Title: Mobile Artillery
// pseudocode:
//move closer to enemy
// attack them
// move away from enemy
// attack them again
// move close to next enemy
// attack them
// move away
// attack them again

// Code:
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(46,35);
this.attackXY(67,53);
this.moveXY(30,26);
this.attackXY(46,35);
this.moveXY(45,39);
this.attackXY(49,63);
this.moveXY(48,12);
this.attackXY(47,30);


// What is this referring to? Think programming-wise rather than in the terms of the game.
//  The keyword "this" always refers to the owner object of the function or code that is running when 
//  "this" is encountered. It could be the window object at the highest level. Or it could be the
//  element that has an onclick event running. Or it could be the instance of an object where the function is 
//  a method of the class.
// What does the () do in JavaScript?
//  The () tells JavaScript that the text preceeding it is a function, either as part of a function declaration  
//  or when the function is called.
// What is the point of the semicolons?
//  The semicolon tells the JavaScript compiler that the end of the line of code has been reached.

 
// Reflection:
// The Code Combat was a fun way to explore beginning concepts in JavaScript like this, methods, and parameters.
// The challenge with the exercises was trying to figure out what was wanted and not doing anything else.
// There was not a lot of difficult concepts as the actual nuts and bolts of the code were hidden and 
// we just made calls to them. So there was was not a lot of hard JavaScript skills to be learned. But I did enjoy
// playing the game, even in it's limited form. In answering the final questions of the unit, I did refer to the 
// web page listed below.

// Other Resources used:
//  http://www.quirksmode.org/js/this.html
