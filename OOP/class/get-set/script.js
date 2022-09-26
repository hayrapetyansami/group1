"use strict";

// GET & SET
const person = {
	name: "John Smith",
	age: 29,

	get userName () {
		return this.name;
	},

	set userName (props) {
		this.name = props;
	}
}

console.log(person.userName); // get
console.log(person.userName = "Alex Wood"); // set