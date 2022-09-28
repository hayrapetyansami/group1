"use strict";

class Main {
	constructor (name, password) {
		this.name = name;
	}

	static hello () {
		console.log("Hello from Main class");
	}

	static res = 105 * 7.2 / 4.3
};

class Test extends Main {};

Main.hello();
Test.hello();

console.log(Main.res.toFixed(2));
console.log(Test.res.toFixed(2));

// ներքևում նշվածները ՉԵՆ ԱՇԽԱՏԵԼՈՒ
// const joe = new Main();
// joe.hello();
// new Main.hello();