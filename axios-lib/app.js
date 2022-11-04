"use strict";
const form = document.querySelector("form");
const url = "http://localhost:3000/posts";

form.addEventListener("submit", function (e) {
	e.preventDefault();

	const data = new FormData(e.target);
	const object = {};
	data.forEach((value, key) => {
		object[key] = value;
	});

	axios.post(url, object);
});

getBtn.addEventListener("click", () => {
	axios.get(url)
	.then(obj => {
		console.log(obj);
		console.log(obj.data);
		console.log(obj.request);
	});
});
