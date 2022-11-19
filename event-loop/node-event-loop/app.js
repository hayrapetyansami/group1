const fs = require("fs");
console.log("init");

setTimeout(() => {
	console.log(performance.now(), "Timer in 1 second");
}, 1000);

setImmediate(() => {
	console.log("Immediate");	
});

fs.readFile(__filename, () => {
	console.log("file readed");
});

setTimeout(() => {
	for (let i = 0; i < 10000000000; i++) {};
	console.log("done");
	Promise.resolve().then(() => console.log("Inside Promise"));
	process.nextTick(() => console.log("Inside macroTask"));
}, 0);

Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("macroTask 1"));

console.log("exit");

/* 
	ցանկացած macroTask ավելի արագ է աշխատում քան ցանկացած 
	microTask

	microTask => Promise (then, catch, finnaly, await)
	macroTask => nextTick()
*/