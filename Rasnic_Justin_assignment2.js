// alert("JavaScript works!");

var name = "Arne",
	daysTravelled = 7,
	weapons = ["greatsword", "dagger", "bow", "axe"];

// procedure
var areWeaponsClean = function (clean) {
	if (clean == "yes") {
		console.log("Weapons are clean and ready for battle.");
	} else {
		console.log("Weapons are dirty. They should be cleaned and readied for battle.");
	};
};

// boolean function
var enterCombat = function (ableToFight, numberOfEnemies) {
	if (ableToFight >= numberOfEnemies) {
		console.log("There are only " + numberOfEnemies + " enemies; " + name + " slaughters them!");
	} else {
		console.log("There are too many! Run!");
	};
};

areWeaponsClean("yes");
enterCombat(5,4);