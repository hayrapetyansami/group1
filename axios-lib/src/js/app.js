"use strict";

import axios from "axios";
const form = document.querySelector("form");
const url = "http://localhost:3000/posts";

form.addEventListener("submit", function (e) {
	e.preventDefault();
	axios.post(url, Object.fromEntries(new FormData(this)));
});

axios.get(url)
.then(obj => console.log(obj.data));