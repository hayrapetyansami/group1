"use strict";


// ES5 Function Constructor
function Man (fullname, age, country) {
	this.fullname = fullname;
	this.age = age;
	this.country = country;
	this.sayCountry = function () {
		console.log(country);
	}
}

const alex = new Man("Alex John", 35, "USA");
console.log(alex);

const john = new Man("John Smith", 41, "Canada");
console.log(john);

alex.sayCountry();
john.sayCountry();