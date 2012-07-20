// Justin Rasnic
// 7/19/2012
// SDI 1207
// Project 3
// 

// handle json data
var getWeapons = function(json){
	var weapons = [];
	for (var key in json.weapons){
		//var weapon = json.weapons[key];
		//console.log(" weapon : " + key + ", name : " + weapon.name + ", range : " + weapon.range);
		 weapons.push(key);
	};
	return weapons;
};

var getRange = function(json){
	var ranges = [];
	for (var key in json.weapons){
			var weapon = json.weapons[key];
			//console.log(" weapon : " + key + ", name : " + weapon.name + ", range : " + weapon.range);
			var	range = weapon.range;
		ranges.push(range);
	}
		return ranges;
};

// global variables
var name = "Arneithan",
	nickName = "Arne",
	cleanliness = true,
	enemies = 6,
	ableToFight = 8,
	weapons = getWeapons(json),
	ranges = getRange(json);

// procedure
var areWeaponsClean = function (clean) {
	if (clean == true) {
		console.log("His weapons are clean and ready for battle.");
	} else {
		console.log("His weapons are dirty. They should be cleaned and readied for battle.");
	};
};

// boolean function
var enterCombat = function (ableToFight, enemies) {
	if (ableToFight >= enemies && cleanliness == true) {
		console.log("There are only " + enemies + " enemies; " + nickName + " slaughters them!");
		return true;
	} if (cleanliness == false) {
		console.log("Your weapons are not properly prepared. You best avoid the fight until you are ready.");
		if (ableToFight < enemies){
			console.log("Those boys would rough you up, anyway.");
			return false;
		} else {
			console.log("It's a shame, too; they would have been easy work.");
			return false;
		}
	} else {
		console.log("Your weapons are ready, but there are too many! Run!");
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
var cleanWeapons = function (weapons) {
	var weaponsRemaining = weapons.length;
	for (var weaponNumber = 0; weaponNumber < weaponsRemaining; weaponNumber++) {
		console.log(name + " is cleaning his " + weapons[weaponNumber] + ".");
	};
	weapons.sort();
	console.log("His weapons are clean, sorted, and ready for battle.");
	cleanliness = true;
	return weapons;
};

// string function
var getIntro = function (name, nickName) {
	var intro = "There is a warrior named " + name + ", known as " + nickName + " to his friends. He can fight " + ableToFight + " enemies at one time.";
	return intro;
}

// body code
var intro = getIntro(name, nickName);
console.log(intro);
areWeaponsClean(cleanliness);

if (cleanliness == false) {
	cleanWeapons(weapons);
} else {
	weapons.sort();
};

console.log(weapons);

console.log("Battle is upon him!");
if (enterCombat(ableToFight, enemies) == true){
	var numberDefeated = combat(enemies);
	console.log(numberDefeated + " enemies defeated. There are none left.");
};





