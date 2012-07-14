// alert("JavaScript works!");

var name = "Arne",
	daysTravelled = 7,
	weapons = ["greatsword", "dagger", "bow", "axe"]

// procedure
var areWeaponsClean = function (clean) {
	if (clean == "yes") {
		console.log("Weapons are clean and ready for battle.")
	} else {
		console.log("Weapons are dirty. They should be cleaned and readied for battle.")
	}

}

areWeaponsClean("yes");