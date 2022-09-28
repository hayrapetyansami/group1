"use strict";

// encapsulation

// #password = "sd15#$5asd4*&^W45s";

function User (email, password) {
	this.email = email;
	// this.password = password;
	let pass = password;

	this.say = function () {
		// console.log(`email: ${this.email} password: ${this.password}`);
		console.log(`email: ${this.email} password: ${pass}`);
	}

	//  getter & setter imitation
	this.getPass = function () {
		return pass;
	}

	this.setPass = function (s) {
		pass = s;
	}
}

const john = new User("john-smith@gmail.com", "sd15#$5asd4*&^W45s");
john.password = "test"; // չի փոխվելու
john.pass = "test"; // չի փոխվելու
john.say();

console.log(john);

// getter & setter աշխատանք
// console.log(john.getPass());
// john.setPass("test");

class User {
	constructor (email, password) {
		this.email = email;
		// this._password = password;
	}

	#password = "alex#777"; // private filed

	say() {
		// console.log(`email: ${this.email} password: ${this.password}`);
		console.log(`email: ${this.email}, password: ${this.#password}`);
	}

	get pass() {
		return this.#password;
	}

	set pass(a) {
		this.#password = a;
	}
}

const alex = new User("alex@rambler.ru");
console.log(alex.pass); // get
alex.pass = "test"; // set
console.log(alex.pass); // get