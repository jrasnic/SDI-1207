// alert("JavaScript works!");
// Justin Rasnic
// 7/13/12
// SDI 1207
// Project 2
// Story with functions, loops, and arrays

// global variables
var name = "Arneithan",
	nickName = "Arne",
	weapons = ["greatsword", "dagger", "bow", "axe"],
	cleanliness = "no",
	enemies = 4;

// procedure
var areWeaponsClean = function (clean) {
	if (clean == "yes") {
		console.log("His weapons are clean and ready for battle.");
	} else {
		console.log("His weapons are dirty. They should be cleaned and readied for battle.");
	};
};

// boolean function
var enterCombat = function (ableToFight, enemies) {
	if (ableToFight >= enemies ) {
		console.log("There are only " + enemies + " enemies; " + nickName + " slaughters them!");
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
		console.log(name + " is cleaning his " + weapons[weaponNumber] + ".");
	};
	weapons.sort();
	console.log("His weapons are clean, sorted, and ready for battle.");
	return weapons;
};

// string function
var getIntro = function (name, nickName) {
	intro = "There was a warrior named " + name + ", known as " + nickName + " to his friends."
	return intro;
}

// body code
var intro = getIntro(name, nickName);
console.log(intro);

areWeaponsClean(cleanliness);

if (cleanliness == "no") {
	cleanWeapons(weapons, enemies);
};
console.log(weapons);

console.log("Battle is upon him!");

enterCombat(5, enemies);

var numberDefeated = combat(enemies);
console.log(numberDefeated + " enemies defeated. There are none left.");





