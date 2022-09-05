"use strict";

const text = document.querySelector("p");
const topBtn = document.querySelector("[data-top]");
const bottomBtn = document.querySelector("[data-bottom]");
const span = document.querySelector("span");
const topElem = document.querySelector("#top");

topBtn.addEventListener("click", () => {
	// text.scrollTo({
	// 	top: -text.scrollHeight,
	// 	behavior: "smooth"
	// });

	// text.scroll({
	// 	top: -text.scrollHeight,
	// 	behavior: "smooth"
	// });

	// text.scrollBy({
	// 	top: -text.scrollHeight,
	// 	behavior: "smooth"
	// });
});

bottomBtn.addEventListener("click", () => {
	// text.scrollTo({
	// 	top: text.scrollHeight,
	// 	behavior: "smooth"
	// });

	// text.scroll({
	// 	top: text.scrollHeight,
	// 	behavior: "smooth"
	// });
	
	// start, center, end
	span.scrollIntoView({block: "start", behavior: "smooth"});
});

document.addEventListener("scroll", () => {
	console.log(document.documentElement.scrollTop);
	if (document.documentElement.scrollTop >= 600) {
		topElem.style.display = "block";
		topElem.addEventListener("click", () => {
			document.documentElement.scrollIntoView({
				block: "start",
				behavior: "smooth"
			})
		});
	} else {
		topElem.removeAttribute("style")
	}
})