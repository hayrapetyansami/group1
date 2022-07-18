// "use strict";
// DOM => Document Object Model
// BOM => Browser Object Model > window

const limeID = document.getElementById("radius");
const limeClass = document.getElementsByClassName("radius");
const btnsVat = document.getElementsByTagName("button");
const paragraph = document.getElementsByName("a")[0];
const flagsOld = document.getElementsByClassName("flag");

// console.log(limeID);
// console.log(limeClass);
// console.log(btnsVat);
// console.log(paragraph);

const flags = document.querySelectorAll(".flag");
const lime = document.querySelector("#radius");
const btns = document.querySelectorAll("button");
const boxes = document.querySelectorAll(".wrapper > .box")
const chgitem = document.querySelector("[data-chgitem]");

boxes.forEach((item, i) => {
	console.log(i)
	console.log(item)
})

console.log(chgitem.textContent);

// console.log(flags);
// console.log(flagsOld);
// console.log(lime);

// flags.forEach(btn => console.log(btn)); // կաշխատի
// flagsOld.forEach(btn => console.log(btn)); // չի աշխատի

// for (let item in flags) {
// 	console.log(item);
// }

// console.log("_____________________\n");

// for (let item in flagsOld) {
// 	console.log(item);
// }

// ՀՈՒՇՈՒՄ
// elem.innerHTML = "<h1>Hello</h1>"
// elem.textContent = "Hello"