// Justin Rasnic
// SDI 1207
// Project 4
// Library


var myLibrary = function () {

	// Does a string follow a 123-456-7890 pattern like a phone number?

	var validPhoneNumCheck = function (phoneNum) {
		if (phoneNum.length == 12) {
			if ((phoneNum.charAt(3) == "-") && (phoneNum.charAt(7) == "-")) {             // Make-up: Assignment 2: Boolean Logic
				phoneNum = phoneNum.slice(0,3) + phoneNum.slice(4,7) + phoneNum.slice(8,12);	
			}; 
		};
		if (phoneNum.length == 10) {
			var phoneCheck = /\d{10}/;
			return phoneCheck.test(phoneNum);			
		} else {return false};
	};
	

	// Does a string follow an aaa@bbb.ccc pattern like an email address?

	var validEmailCheck = function (email) {
		var emailCheck = /[a-zA-Z0-9\-_\.]+@[a-zA-Z]+\.[a-zA-Z]+/;
		return emailCheck.test(email);
	};


	// Is the string a URL? (Does it start with http: or https:?)

	var urlCheck = function (url){
		if (url.substring(0,5) == "http:") {
			return true;
		} else {
			if (url.substring(0,6) == "https:") {
				return true;
			} else { return false};
		}
	};

	// Title-case a string (split into words, then uppercase the first letter of each word)

	var titleCase = function (string) {
		var wordCheck = /\s/;
		var firstLetter = string.slice(0,1);
		string = string.split(firstLetter).join(firstLetter.toUpperCase());
		for (var i = 0; i < string.length; i++) {
			if (wordCheck.test(string.slice(i,i+1)) == true){               // Can't get it to work right. Once a letter is
				var lowerCaseLetter = string.slice(i+1,i+2);                // replaced with capitol, all occurrances of that
				var upperCaseLetter = lowerCaseLetter.toUpperCase();        // leeter are replaced within the string.
				string = string.split(lowerCaseLetter).join(upperCaseLetter);      
			}
		}
		return string;        
	};

	// Given a string that is a list of things separated by a given string, 
	// as well as another string separator, return a string with the first 
	// separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

	var changeSeparator = function (string, oldSep, newSep) {
		var newString = string.replace(oldSep, newSep, "g");
		return newString;
	};

	// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

	var formatNumber = function (number) {
		var newNumber = number.toFixed(2);
		return newNumber;
	};

	// Find the number of hours or days difference between two dates.

	var daysFrom = function (year, month, day) {
		var origDate = new Date(year, month, day);
		var currentDate = new Date();
		var daysSince = (currentDate - origDate)/86400000;
		var days = Math.floor(daysSince);
		var hours = days%24;
		return {
				"days": days,
				"hours": hours
		};
	};

	// Given a string version of a number such as "42", return the value as an actual Number, such as 42.

	var stringToNum = function (stringNumber) {
		var newNumber = parseFloat(stringNumber);
		return newNumber;
	};

	return {
		"validPhoneNumCheck": validPhoneNumCheck,
		"validEmailCheck": validEmailCheck,
		"urlCheck": urlCheck,
		"titleCase": titleCase,
		"changeSeparator": changeSeparator,
		"formatNumber": formatNumber,
		"daysFrom": daysFrom,
		"stringToNum": stringToNum

	};

};

var myLib = myLibrary ();

console.log(myLib.validPhoneNumCheck("203-297-5077"));
console.log(myLib.validEmailCheck("bballerjr05@yahoo.com"));
console.log(myLib.urlCheck("https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substring"));
console.log(myLib.titleCase("i hope this works"));
console.log(myLib.changeSeparator("a,b,c",",","/"));
console.log(myLib.formatNumber(3.14159));
console.log(myLib.daysFrom(1986,09,04));
console.log(myLib.stringToNum("-47.3"));

