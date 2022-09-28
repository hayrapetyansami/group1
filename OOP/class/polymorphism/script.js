"use strict";

// Պոլիմորֆիզմ // Polymorphism

// example 1
function allInOne (...params) {
	if (params.length === 0) {
		console.log("Welcome to our website");
	} else if (params.length === 1) {
		console.log(`Hello dear ${params[0]}`);
	} else if (params.length === 2) {
		console.log(`Greetings dear ${params[0]} ${params[1]}`);
	}
}

allInOne();
allInOne("Tamara");
allInOne("Tamara", "Zohrabyan");

// example 2

const data = [
	{name: "John", id: 100},
	{name: "Alex", id: 101},
	{name: "Mike", id: 102},
];

function find (...params) {
	if (typeof(params[0]) === "string") {
		return data.filter(obj => obj.name === params[0]);
	} else {
		return data.filter(obj => obj.id === params[0]);
	}
}

console.log(find("Alex"));
console.log(find(100));

// example 3

class Animal {
	say() {
		console.log("rrr, I'm an animal");
	}
}

class Dog extends Animal {
	say() {
		console.log("woof, woof !!!");
	}
}

class Cat extends Animal {
	say() {
		console.log("mew, meuw");
	}
}

const mainProto = new Animal();
const dog = new Dog();
const cat = new Cat();

mainProto.say();
dog.say();
cat.say();

// հարցնում ենք արդյոք dog object-ը օրինակ է նշվածներին
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Cat); // false