"use strict";


// ES5 Function Constructor
function Man (fullname, age) {
	this.fullname = fullname;
	this.age = age;
}

const alex = new Man("Alex John", 35);
console.log(alex);

const john = new Man("John Smith", 41);
console.log(john);