"use strict";

const lime = document.getElementById("lime"),
	flags = document.querySelector(".flags"),
	flag = flags.querySelectorAll(".flag"),
	btns = document.querySelectorAll("button"),
	wrapper = document.querySelector(".wrapper"),
	boxes = wrapper.querySelectorAll(".box"),
	chgitem = document.querySelector("[data-chgitem]");

// btns.forEach(btn => {
// 	btn.style.color = "lime";
// });

// lime.style.transform = "rotatey(89deg)";
// const radius = 100;
// const color = "#f0f";

// btns[1].style.cssText = `
// 	border-radius: ${radius <= 101 ? radius : 0}%;
// 	color: ${color}
// `;

const box = document.createElement("div"); // ստեղծում ենք էլեմենտ
const some = document.createElement("p"); // ստեղծում ենք էլեմենտ
const html = document.createElement("div"); // ստեղծում ենք էլեմենտ


some.textContent = "SOME PREPEND"
box.classList.add("box");
box.textContent = "APPEND"

wrapper.prepend(some); // ավելացնում է սկզբում

// wrapper.append(box); // ավելացնում է վերջում
wrapper.appendChild(box); // հին տարբերակ

// lime.before(flags); // flags թեգը դնում է lime-ից առաջ
wrapper.insertBefore(some, box)// հին տարբերակ

// btns[0].after(some); // some թեգը դնում է btns[0]-ից հետո

// chgitem.remove();
document.body.removeChild(chgitem); // հին տարբերակ


// btns[3].replaceWith(lime); //btns[3]ը փոխարինում ենք lime-ով
document.body.replaceChild(btns[3], lime) // հին տարբերակ

document.body.append(html);
html.innerHTML = "<h1 style=\"color: red\">HELLO</h1>";
html.innerHTML += "<p style=\"color: blue\">My name is mr. Robot !</p>";

// textContent => TEXT
// innerHTML => HTML