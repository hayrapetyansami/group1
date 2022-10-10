"use strict";

// API => Application Programming Interface

// DOM API
// document.querySelectorAll()
// document.createElement()

/* 
	1․ fetch-ի առաջին պարամետրը դա URL-ն է
	2․ fetch-ի երկրորդ պարամետրը դա Settings-ն է Object-ի տեսքով
	3․ Եթե fetch API-ը մենք օգտագործում ենք GET հարցումի համար, ապա մենք 2րդ պարամետրը կարող ենք չգրել, սակայն, եթե մենք օգտագործելու ենք POST, PUT և/կամ այլ մեթոդներ, ապա որպես 2րդ պարամետր պետք է նշենք Object
	4. fetch API-ի 2րդ պարամետրի հերթականությունը
*/

const posts = "https://jsonplaceholder.typicode.com/posts/";
const photos = "https://jsonplaceholder.typicode.com/photos/";

// const wrapper = document.createElement("div");
// const postsBlock = document.createElement("div");
// const photosBlock = document.createElement("div");

// document.body.prepend(wrapper);
// wrapper.append(postsBlock);
// wrapper.append(photosBlock);

// let i = 1;

// ստանում ենք փոստեր
// const getPostsFromServer = setInterval(() => {
// 	fetch(`${posts}${i}`)
// 	.then(response => response.json())
// 	.then(data => {
// 		postsBlock.innerHTML += `
// 			<div style="margin-bottom: 40px">
// 				<h2>${data.title}</h2>
// 				<p>${data.body}</p>
// 			</div>
// 		`;
// 	});

// 	if (i === 10) {
// 		clearInterval(getPostsFromServer)
// 	}

// 	i++;
// }, 1000);

// ստանում ենք նկարներ
// const getPhotosFromServer = setInterval(() => {
// 	fetch(`${photos}${i}`)
// 	.then(response => response.json())
// 	.then(data => {
// 		photosBlock.innerHTML += `
// 			<div style="margin-bottom: 40px">
// 				<h2>${data.title}</h2>
// 				<img src="${data.url}" style="width: 100%">
// 			</div>
// 		`;
// 	});

// 	if (i === 10) {
// 		clearInterval(getPhotosFromServer)
// 	}

// 	i++;
// }, 1000);

const elem = document.createElement("div");
document.body.prepend(elem);

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	headers: {
		"content-type": "application/json"
	},
	body: JSON.stringify({
		userId: 111,
		id: 111,
		title: "Անչափ հետաքրքիր վերնագիր",
		body: "Անչափ հետաքրքիր տեքստ, որը դուք կարող եք կարդալ 1 րոպեում"
	})
})
.then(response => response.json())
.then(data => {
	elem.innerHTML += `
		<h2>${data.title}</h2>
		<p>${data.body}</p>
	`;
})