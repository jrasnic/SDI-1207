// Justin Rasnic
// 7/19/2012
// SDI 1207
// Project 3
// 

// handle json data
var handleData = function(json){
	var weapons = [];
	for (var key in json.weapons){
		//var weapon = json.weapons[key];
		//console.log(" weapon : " + key + ", name : " + weapon.name + ", range : " + weapon.range);
		weapons.push[key];
	};
	return weapons;
};


// global variables
var name = "Arneithan",
	nickName = "Arne",
	cleanliness = false,
	enemies = 4;
	weapons = handleData(json);

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
	} if (ableToFight >= enemies && cleanliness == false) {
		console.log("Your weapons are not properly prepared. You best avoid the fight until you are ready.");
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
	intro = "There was a warrior named " + name + ", known as " + nickName + " to his friends."
	return intro;
}

// body code
var intro = getIntro(name, nickName);
console.log(intro);
areWeaponsClean(cleanliness);

if (cleanliness == false) {
	cleanWeapons(handleData(json));
};

console.log(weapons);



console.log("Battle is upon him!");
enterCombat(5, enemies);
var numberDefeated = combat(enemies);
console.log(numberDefeated + " enemies defeated. There are none left.");






