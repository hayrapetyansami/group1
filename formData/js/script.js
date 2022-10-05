"use strict";

const subscribeForm = document.querySelector("form#subscribe");
const signInForm = document.querySelector("form#Sign-In");
const get = document.querySelector("#get");

const responseMessages = {
	waiting: "Waiting...",
	success: "Success",
	fail: "Server Error"
};

// without JSON
subscribeForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const status = document.createElement("p");
	status.style.cssText = `
		margin-top: 20px;
		font-size: 17px;
	`;

	status.textContent = responseMessages.waiting;
	e.target.append(status);

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	// request.setRequestHeader("content-type", "multipart/form-data");
	request.send(formData);

	request.addEventListener("load", () => {
		if (request.status === 200) {
			console.log(request.response);
			status.textContent = responseMessages.success;
			setTimeout(() => {
				status.remove();
				e.target.reset();
			}, 1500);
		} else {
			status.textContent = responseMessages.fail;
			setTimeout(() => {
				status.remove();
				e.target.reset();
			}, 1500);
		}
	});
});

// with JSON
signInForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const obj = {};
	formData.forEach((value, key) => {
		obj[key] = value;
	});

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	request.setRequestHeader("content-type", "application/json");
	request.send(JSON.stringify(obj));

	request.addEventListener("load", () => {
		if (request.status === 200) {
			console.log("Ok");
		} else {
			console.log("Server Error");
		}
	})
});

get.addEventListener("click", () => {
	const req = new XMLHttpRequest();
	req.open("GET", "server/server.php");
	req.setRequestHeader("content-type", "application/json");
	req.send();

	req.addEventListener("load", () => {
		if (req.status === 200) {
			console.log(req);
		} else {
			console.log("Server error");
		}
	});
});