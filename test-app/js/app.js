"use strict";


// NPM - Node Package Manager

let i = 0;
function setDB (...params) {
	return {
		id: ++i,
		brand: params[0],
		model: params[1],
		storage:  params[2],
		price:  params[3],
		colors:  params[4]
	}
}

const a = [
	setDB("Xiaomi", "Note 8T", "128GB", "300 $", ["Blue", "White", "Gray", "Black"]),
	setDB("Google", "Pixel 7", "512GB", "1087 $", ["Black", "Rose", "Purple"]),
	setDB("Samsung", "S21 ultra", "256GB", "1244 $", ["White", "Black", "Blue", "Gray"])
];

fetch("http://localhost:3000/product", {
	method: "POST",
	headers: {
		"content-type":"application/json"
	},
	body: JSON.stringify(a)
})

fetch("http://localhost:3000/product/2/")
.then(data => data.json())
.then(data => console.log(data))