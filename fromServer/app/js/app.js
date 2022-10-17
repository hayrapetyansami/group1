"use strict";
// CRUD = Create (POST), Read (GET), Update (PUT), Delete (Delete)
const root = document.querySelector("#root");

const title = document.createElement("h1");
const subTitle =  document.createElement("p");
const form = document.createElement("form");
const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenAddBtn = document.createElement("button");

const listsBlock = document.createElement("div");

title.textContent = "CRUD";
subTitle.textContent = "Asyn Application"

form.id = "app-form";
screenBlock.id = "screenBlock";
screenInput.type = "text";
screenInput.placeholder = "Write here...";
screenAddBtn.textContent = "ADD";
screenAddBtn.id = "screenAddBtn";

listsBlock.id = "listsBlock";

root.prepend(title, subTitle)
root.append(form);

form.prepend(screenBlock);
form.append(listsBlock);
screenBlock.append(screenInput, screenAddBtn);

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch("http://localhost:8888/todos", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({ title: val })
		});
	}

	this.reset();
});

fetch("http://localhost:8888/todos")
.then(data => data.json())
.then(data => {
	data.forEach(todo => {
		listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<div class="listsBlock__item__content">
					<span>${todo.id}</span>
					<input type="text" value="${todo.title}" readonly>
				</div>
				<div class="buttons">
					<button data-rm>Remove</button>
					<button data-ed>Edit</button>
					<button data-sv>Save</button>
				</div>
			</div>
		`;
	});
	return data;
})
.then(data => {
	const removeBtns = document.querySelectorAll("[data-rm]");
	const editBtns = document.querySelectorAll("[data-ed]");
	const saveBtns = document.querySelectorAll("[data-sv]");

	editBtns.forEach((btn, index) => {
		btn.addEventListener("click", function () {
			const input = this.parentElement.previousElementSibling.lastElementChild;

			input.classList.add("edit");
			input.removeAttribute("readonly");

			saveBtns.forEach((saveBtn, saveBtnIndex) => {
				if (index === saveBtnIndex) {
					saveBtn.style.display = "inline-block";
					btn.style.display = "none";
				}
			});
		})
	});

	function changeDB (btnArray, method) {
		btnArray.forEach(rm => {
			rm.addEventListener("click", (e) => {
				data.forEach(todo => {
					const fakeId = rm.parentElement.previousElementSibling.firstElementChild.textContent;
					const forEddited = rm.parentElement.previousElementSibling.lastElementChild;
					if (parseInt(fakeId) === todo.id) {
						fetch(`http://localhost:8888/todos/${todo.id}`, {
							method: method,
							headers: {
								"content-type" : "application/json"
							},
							body: method === "PUT" ? JSON.stringify({title: forEddited.value.trim()}) : ""
						});
					}
				});
			});
		});
	}

	changeDB(removeBtns, "DELETE");
	changeDB(saveBtns, "PUT");
});

// const a = 10;
try {
	console.log(a);
} catch (err) {
	throw new Error(err + " Hello")
}

console.log(10);