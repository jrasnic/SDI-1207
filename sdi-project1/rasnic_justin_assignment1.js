// Justin Rasnic
// 6/26/12
// SDI 1207
// Project 1
// Story with variables, conditionals and outputs

var name = "Arne",
	fullName = "Arneithan \"Cold Blooded\" Seregring",
	thugCount = 4,	
	help = true,
	life;

console.log("There was a renowned warrior known as " + fullName + ".");
console.log("His friends called him " + name + " for short.");
console.log("He could single-handedly fight and defeat 4 thugs at one time.");
console.log(thugCount + " thugs are raiding a caravan.");
console.log("Will " + name + " help the traders defend their caravan?" + help);

if (help === true){
	console.log(name + " will help the traders!");
	if(thugCount <= 4){
		thugCount = 0
		console.log(name + " fights the thugs, leaving " + thugCount + " thugs alive.");
		console.log(name + " defeats the thugs!");
		life = true;
	} else {
		thugCount -= 4
		console.log(name + " fights the thugs, leaving " + thugCount + " thugs alive.");
		console.log(name + " is dead.");
		life = false;
	}
} else {
	console.log(name + " will not help the traders.");
	console.log("All the traders die and the thugs get away with the goods.");
	if (fullName === "Arneithan \"Cold Blooded\" Seregring"){
		console.log("Cold Blooded indeed...");
		life = true;
	} else {
		console.log("You are a yelow-bellied coward, " + fullName + ".");
		life =true;
	}
	
}
console.log(fullName + " survived." + life);