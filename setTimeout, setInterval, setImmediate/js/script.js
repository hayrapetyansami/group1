"use strict";

const first = setTimeout(() => {
	console.log(10 + 5);
}, 1500);

clearTimeout(first); // ինչ-որ պայմանով

let i = 0;
const second = setInterval(() => {
	i++;
	console.log(i);

	if (i === 3000) {
		clearInterval(second); // երբ i = 3000 կանջատվի
	}
}, 0);