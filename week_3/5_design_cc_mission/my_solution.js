// I worked with Maddison Brusman on this challenge

// Your mission description:
// Thorin is back in the dungeon only this time he is out for treasure.
// Move Thorin through the corredors, slay any ogres you meet and loot them
// Find the treasure room, breakdown the door and loot the treasure

// Pseudocode
// Thorin moves up 
// Thorin moves up
// Thorin moves right
// Thorin moves down
// Thorin moves right
// Thorin attacks nearby enemy
// Thorin moves up
// Thorin moves left
// Thorin attacks nearby enemy
// Thorin loots enemy
// Thorin moves left
// Throin breaks down door
// Thorin moves left
// THorin loots treasure chest

// Initial Code
function Hero( name, x_position, y_position ) {
	this.name = name;
	this.x = x_position;
	this.y = y_position;
	this.gold = 0;

	this.showPosition = function() {
		console.log( this.name + " is now at " + this.x + ", " + this.y );
	};

	this.moveUp = function() {
		this.y = this.y + 1;
		console.log( this.name + " moves up 1 space");
		this.showPosition();
	};

	this.moveDown = function() {
		this.y = this.y - 1;
		console.log( this.name + " moves down 1 space");
		this.showPosition();
	};

	this.moveLeft = function() {
		this.x = this.x - 1;
		console.log( this.name + " moves left 1 space");
		this.showPosition();
	};

	this.moveRight = function() {
		this.x = this.x + 1;
		console.log( this.name + " moves right 1 space");
		this.showPosition();
	};

	this.attackNearbyEnemy = function( enemyType ) {
		console.log( this.name + " attacks and kills the " + enemyType );
	};

	this.breakDownDoor = function() {
		console.log( this.name + " bashes down the door");
	};

	this.getLoot = function( objectToLoot ) {
		var lootedGold = 0;

		if (objectToLoot === "ogre")
			lootedGold = Math.floor(Math.random() * 10);

		if ( objectToLoot === "treasure chest")
			lootedGold = Math.floor(Math.random() * 100);

		this.gold = this.gold + lootedGold;
		console.log( this.name + " has looted " + lootedGold + " gold from the " + objectToLoot + ". " + this.name + " now has a total of " + this.gold + " gold!" );
	};

	this.doMission = function() {
		this.moveUp();
		this.moveRight();
		this.moveDown();
		this.moveRight();
		this.attackNearbyEnemy("monster");
		this.moveUp();
		this.moveLeft();
		this.attackNearbyEnemy( "ogre" );
		this.getLoot( "ogre" );
		this.moveLeft();
		this.breakDownDoor();
		this.moveLeft();
		this.getLoot( "treasure chest" );
		console.log("Success! Mission completed.");
	};

}

var thorin = new Hero( "Thorin", 0, 0);
thorin.doMission();






// Refactored Code
// This works as I expected, so no refactoring will be done.





// Reflection
// This was a very complex task and I thought about it for a few days before attempting.
// I knew that I needed to end up with similar code to what we added to CC, but I would have to
// add all the missing functions that we just took for granted in the game. My only option
// was to just use console.log for communicating to the user, although there was no real
// interaction with them. While working on this, I knew I needed to generate random loot amounts.
// And that JavaScript's random function would probably return something less that 1. So I Googled
// "Javascript random" and saw how to call it properly with Math and also saw how to truncate it 
// to a whole number, so I just needed to multi[ply by some number to get what I needed for my 
// whole number loot. As far as new skills are concerned, this exercise is just an expanded version 
// of the things we have done elsewhere this week, but I like how it was all brought together in
// this more complete task.  It was enjoyable to put together the tings that were in my head about this
// and just crank out the code.  The tedious part was typing in all the "this" keywords and the "console.log" 
// statements.


