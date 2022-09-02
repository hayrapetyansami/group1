"use strict";

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

box.style.boxSizing = "border-box";


// console.log(`${width} - width`);
// console.log(`${height} - height`);

/* 
	offsetHeight: Number
	offsetLeft: Number
	offsetParent: HTML TAG
	offsetTop: Number
	offsetWidth: Number
*/

btn.addEventListener("click", () => {
	// box.style.height = height + "px";
	// console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(window.getComputedStyle(box).getPropertyValue("display"));