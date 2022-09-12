"use strict";

const animal = {
	health: 100,
	isQuadruped: true,
	saySomething (some) {
		console.log(some);
	}
};

const fish = {
	health: 50
};

// չենք օգտագործելու այս մեթոդը
// fish.__proto__ = animal;

Object.setPrototypeOf(fish, animal);
console.log(fish.isQuadruped);

// ստեղծում ենք նոր օբյեկտ
const soldier = {
	health: 100,
	armor: 100,
	damage: 100,
	run() {
		console.log("I'm running !!!");
	}
}

const john = Object.create(soldier); // միանգամից տալիս ենք թե ումից ա ժառանգելու

// էս դեպքում փոփոխված տարբերակ
const smith = {
	damage: 55
}

//           ով ա ժառանգելու,  ումից
Object.setPrototypeOf(smith, soldier);

console.log(smith);
smith.run()