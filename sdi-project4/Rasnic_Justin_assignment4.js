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
		string = string.split(firstLetter).join(firstLetter.toUpperCase(),1);
		for (var i = 0; i < string.length; i++) {
			if (wordCheck.test(string.slice(i,i+1)) == true){
				var lowerCaseLetter = string.slice(i+1,i+2);
				var upperCaseLetter = lowerCaseLetter.toUpperCase();
				string = string.split(lowerCaseLetter).join(upperCaseLetter,1);
			}
		}
		return string;
	};

	// Given a string that is a list of things separated by a given string, 
	// as well as another string separator, return a string with the first 
	// separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

	return {
		"validPhoneNumCheck": validPhoneNumCheck,
		"validEmailCheck": validEmailCheck,
		"urlCheck": urlCheck,
		"titleCase": titleCase

	};

};

var myLib = myLibrary ();

console.log(myLib.validPhoneNumCheck("203-297-5077"));
console.log(myLib.validEmailCheck("bballerjr05@yahoo.com"));
console.log(myLib.urlCheck("https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substring"));
console.log(myLib.titleCase("i hope this works"));

