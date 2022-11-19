"use strict";

setTimeout(() => console.log("timeout"));

Promise.resolve()
	.then(() => console.log("promise resolve"));

Promise.resolve()
	.then(() => console.log("promise resolve 2"));

// queueMicrotask(() => console.log("I'm here"));

Promise.resolve()
	.then(() => console.log("promise resolve 3"));

console.log("like my code here");

// microtasks: then/catch/finnaly/await
// some code
// microtasks: then/catch/finnaly/await
// some code