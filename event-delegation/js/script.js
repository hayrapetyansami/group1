"use strict";

const btns = document.querySelectorAll("button");
const wrapper = document.querySelector(".wrapper");

// tagName === "BUTTON"
// nodeName === "BUTTON"
// localName === "button"

// wrapper.addEventListener("click", (e) => {
// 	if (e.target && e.target.tagName === "BUTTON") {
// 		console.log(e.target);
// 	}
// });

wrapper.addEventListener("click", (e) => {
	if (e.target && e.target.matches("button.btn")) {
		console.log(e.target);
	}
});

for (let i = 6; i <= 12; i++) {
	const btnElem = document.createElement("button");
	btnElem.textContent = i;
	wrapper.append(btnElem);
}