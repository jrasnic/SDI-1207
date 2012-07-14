// alert("JavaScript works!");

var name = "Arne",
	weapons = ["greatsword", "dagger", "bow", "axe"],
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
	}
	return defeated;

};

areWeaponsClean("yes");
enterCombat(5, enemies);
var numberDefeated = combat(enemies);
console.log(numberDefeated + " enemies defeated. There are none left.");


