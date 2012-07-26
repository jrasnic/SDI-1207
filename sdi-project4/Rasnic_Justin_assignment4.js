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

	var



	return {
		"validPhoneNumCheck": validPhoneNumCheck
	};

};

var myLib = myLibrary ();

console.log(myLib.validPhoneNumCheck("203-297-5077"));