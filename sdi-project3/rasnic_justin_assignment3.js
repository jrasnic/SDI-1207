// alert("JavaScript works!");

// handle json data

var handleData = function(json){
	for (var key in json.weapons){
		var weapon = json.weapons[key];
		console.log(" weapon : " + key + ", name : " + weapon.name + ", range : " + weapon.range);
	};
};

handleData(json);