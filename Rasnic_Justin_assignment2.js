// alert("JavaScript works!");

// global variables
var name = "Arne",
	weapons = ["greatsword", "dagger", "bow", "axe"],
	cleanliness = "no",
	enemies = 4;

// procedure
var areWeaponsClean = function (clean) {
	if (clean == "yes") {
		console.log("Weapons are clean and ready for battle.");
	} else {
		console.log("Weapons are dirty. They should be cleaned and readied for battle.");
	};
};

// boolean function
var enterCombat = function (ableToFight, enemies) {
	if (ableToFight >= enemies) {
		console.log("There are only " + enemies + " enemies; " + name + " slaughters them!");
		return true;
	} else {
		console.log("There are too many! Run!");
		return false;
	};
};

// number function
var combat = function (enemies) {
	var defeated = 0;
	while (defeated < enemies) {
		console.log( defeated + " enemies defeated.");
		defeated ++;
	};
	return defeated;

};


// array function
var cleanWeapons = function (weapons, enemies) {
	var weaponsRemaining = weapons.length;
	for (var weaponNumber = 0; weaponNumber < weaponsRemaining; weaponNumber++) {
		console.log("Cleaning " + weapons[weaponNumber] + ".");
	};
	weapons.sort();
	console.log("Weapons are clean, sorted, and ready for battle.");
	return weapons;
};



areWeaponsClean(cleanliness);

if (cleanliness == "no") {
	cleanWeapons(weapons, enemies);
};

console.log(weapons);

enterCombat(5, enemies);

var numberDefeated = combat(enemies);

console.log(numberDefeated + " enemies defeated. There are none left.");





