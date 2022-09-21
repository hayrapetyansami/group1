// "use strict";

// function context (a, b) {
// 	// console.log(this); 

// 	function calc() {
// 		// console.log(this);
// 		return a + b
// 	}

// 	return calc();
// }

// console.log(context(4, 5));

// const obj = {
// 	num1: 15,
// 	num2: 9,
// 	second: 5,
// 	calc: function(){
// 		// console.log(this); // obj

// 		function go1 () {
// 			console.log(this); // undefined || window
// 		}

// 		go1();

// 		const go = () => {
// 			console.log(this); // Object
// 		}

// 		go();
// 	}
// }

// obj.calc();

// function User (name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// const petros = new User("Petros", 30);
// const poghos = new User("Poghos", 41);

// console.log(petros);
// console.log(poghos);
// console.log(typeof(new User()));

// call, apply, bind

// function sayMyCountry(city, village) {
// 	console.log(this); // undefined || blabla
// 	console.log(`${this.country} ${city}`); // error || Armenia
// 	console.log(village);
// }

// const blabla = {
// 	country: "Armenia",
// 	a: 5,
// 	b: 10,
// 	c: 15
// }

// sayMyCountry.call(blabla, "Yerevan", "Shaqi");
// sayMyCountry.apply(blabla, ["Yerevan", "Shaqi"]);

// function double (n) {
// 	console.log(`n: ${n}`);
// 	console.log(`this: ${this}`);
// 	return this * n;
// }

// const a = double.bind(2); // մենք ստեղ double-ի THIS-ը դնում ենք 2

// console.log(a(3)); // մենք ստեղ double-ի N-ը դնում ենք ինչ-որ թիվ

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	console.log(e.target); // globalThis (window)
});

btn.addEventListener("click", function () {
	console.log(this); // HTML element
	this.style.background = "#f00";
});

/*
	1) եթե "use strict"-ը միացված ա մենք ստանում ենք undefined, 
	հակառակ դեպքում globalThis (browser-ում window)

	2) Օբջեքթի մեջ ստեղծված մեթոդի THIS-ը հղվում է դեպի այդ օբջեքթին ()

	3) function constructor-ի և class-ի մեջ օգտագործած this-ը դա օբջեքթի
	նոր prototype (նախատիպ)ն ա

	4) Ձեռքով կոնտեքստը (this) կապելու համար, օգտագործում ենք՝
	call, apply, bind: BIND-ը վերադարձնում է ՖՈՒՆԿՑԻԱ

	5) arrow function-ի THIS-ը իր ծնողի THIS-ն ա, arrow function չունի 
	սեփական THIS
*/