"use strict";

// function* generate() {
// 	yield "a";
// 	yield "l";
// 	yield "e";
// 	yield "x";
// }

// const str = generate();

// for (let i = 0; i < 4; i++) {
// 	console.log(str.next().value);
// }

function* count (n) {
	for (let i = 0; i <= n; i++) {
		yield i;
	}
}

const counter = count(4);

console.log(counter.next().value);
console.log(counter.next().done);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

// for (let n of count(10)) {
// 	console.log(n);
// }