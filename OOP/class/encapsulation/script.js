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
		this._password = password;
	}

	// #password = "test123"; // private filed

	say() {
		// console.log(`email: ${this.email} password: ${this.password}`);
		console.log(`email: ${this.email}, password: ${this._password}`);
	}

	get pass() {
		return `GET private filed: ${this.#password}`;
	}

	set pass(pass) {
		this.#password = pass;
	}

	// static rememberState = []
}

// const sami = new User("sami@hsrocket.com");
// // sami.#password = "admin123"; // error

// console.log(sami.pass); // get
// sami.pass = "admin123"; // set
// console.log(sami.pass); // get

// sami.say()

console.log(User.rememberState());