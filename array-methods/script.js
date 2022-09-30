"use strict";

const arr = [14, 5, 6, 15, 3, 9, 8, 24, 15, "s"];

// FOR EACH
// arr.forEach((item, index, currentArray) => {
// 	console.log(`${index}: ${item}`);
// 	console.log(currentArray);
// });

// MAP
// const newArr = arr.map(item => item)
// .filter(item => typeof(item) === "number")
// .map(item => item * 2);

// console.log(newArr);
// console.log(arr);

// FILTER
// const filteredArr = arr.filter((item, index, currentArray) => {
// 	return typeof(item) === "object";
// });

// const shortFiltered = arr.filter(item => typeof(item) === "string");

// console.log(filteredArr);
// console.log(shortFiltered);

// SOME & EVERY
// const some = arr.some(item => typeof(item) === "string");
// console.log(some);

// const every = arr.every(item => typeof(item) === "number");
// console.log(every);

// CONCAT

// const firstNum = [2, 4, 6];
// const secondNum = [3, 5, 7];
// const z = [].concat(firstNum, secondNum); // contact
// const y = [...firstNum, ...secondNum]; // spread

// console.log(z);
// console.log(y);

// ARRAY || FROM / IsArray
// const btns = document.querySelectorAll("button");
// const test = Array.from(btns).map(item => item);
// console.log(test);

// console.log(Array.isArray(btns)); // ստուգում ենք զանգված է թե ոչ

// Reduce

// const prices = [2500, 3800, 4600];
// const sale = [1800, 1950, 2200];

// const total = [...prices, ...sale]

// const result = total.reduce((res, current) => {
// 	// console.log(current);
// 	return res * current;
// }, 1);

// console.log(result);
// // console.log(prices);

// const letters = ["a", "b", "c"];
// const totalLetters = letters.reduce((result, current) => {
// 	return result + current
// }, "");

// console.log(totalLetters);

// FIND

// const findArr = [5, 10, 15, 20, 25, 30, 0, 100];

// const found = findArr.findLast(item => item > 10);
// console.log(found);



// FILL // WARNING

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
const c = [1, 2, 3, 4];

console.log(a.fill(0, 2, 4)); // [ 1, 2, 0, 0 ]
console.log(b.fill(5, 1)); // [ 1, 5, 5, 5 ]
console.log(c.fill(7)); // [ 7, 7, 7, 7 ]