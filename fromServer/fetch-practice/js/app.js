"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);

	const dataObject = {};
	formData.forEach((value, key) => {
		dataObject[key] = value;
	});

	fetch("server/s.php", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(dataObject)
	}).then(data => data.text())
	.then(data => console.log(data))
	.catch(() => console.log("some error"))
	.finally(() => e.target.reset());
});