const { persons, setRing } = require("./modules/game");
const ui = require("./modules/ui")

setRing(persons, "Frodo");

for (const person of persons) {
	console.log(person);
}

document.body.prepend(ui())

/* 
	ԶԳՈՒՇԱՑՈՒՄ։
	Չընկնել շրջանաձև կախվածության մեջ !
*/