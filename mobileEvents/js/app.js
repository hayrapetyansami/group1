"use strict";

const box = document.getElementById("box");

box.addEventListener("touchmove", (e) => {
	e.target.style.cssText += `
		transform: translateX(${e.touches[0].pageX}px) translateY(${e.touches[0].pageY}px);
	`;
});

// box.addEventListener("touchstart", (e) => {
// 	console.log("touchstart");
// });
// box.addEventListener("touchmove", (e) => {
// 	console.log("touchmove");
// });

// box.addEventListener("touchend", (e) => {
// 	console.log("touchend");
// });

// touches
// targetTouches
// changedTouches