"use strict";

const person = {
	name: "John",
	age: 21,
	isAdult: true,
	parents : {
		mother: "Nelly",
		father: "Adam"
	},
	friends: {
		bestFriends: {
			name: "Tom"
		},
		someFriends: {
			name: "Cruze"
		}
	}
}

const copy = JSON.parse(JSON.stringify(person));
person.friends.someFriends.name = "Alex";


console.log(copy);
console.log(person);

// JSON => JavaScript Object Notation
// JSON.stringify => Object-ը դարձնում է JSON
// JSON.parse => JSON-ը դարձնում է Object