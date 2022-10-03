"use strict";

const amd = document.querySelector("#amd");
const usd = document.querySelector("#usd");

amd.addEventListener("input", (e) => {
	const request = new XMLHttpRequest(); // AJAX

	// 1. method 2. url, 3. async, 4. pass
	request.open("GET", "./db/data.json");
	request.setRequestHeader("Content-Type", "application/json");
	request.send();

	// status, statusText, response, readyState

	// request.addEventListener("readystatechange", () => {
	// 	if (request.readyState === 4 && request.status === 200) {
	// 		// console.log(request.response);
	// 		const data = JSON.parse(request.response);
	// 		usd.value = (parseFloat(e.target.value) / parseFloat(data.change.usdData)).toFixed(2);
	// 	} else {
	// 		usd.value = "Some Error";
	// 	}

	// 	if (isNaN(usd.value)) {
	// 		usd.value = 0;
	// 	}
	// });

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			usd.value = (parseFloat(e.target.value) / parseFloat(data.change.usdData)).toFixed(2);
		} else {
			console.log("Error");
		}

		if (isNaN(usd.value)) {
			usd.value = 0;
		}
	});
});

usd.addEventListener("input", (e) => {
	const request = new XMLHttpRequest();

	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			amd.value = (parseFloat(data.change.usdData) * parseFloat(e.target.value)).toFixed(2);
		}
	});
});