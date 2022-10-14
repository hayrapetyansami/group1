"use strict";
// CRUD = Create (POST), Read (GET), Update (PUT), Delete (Delete)
const root = document.querySelector("#root");

const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenAddBtn = document.createElement("button");

const listsBlock = document.createElement("div");

screenBlock.id = "screenBlock";
screenInput.type = "text";
screenInput.placeholder = "Write here...";
screenAddBtn.textContent = "ADD";
screenAddBtn.id = "screenAddBtn";

listsBlock.id = "listsBlock";

root.prepend(screenBlock);
root.append(listsBlock);
screenBlock.append(screenInput, screenAddBtn);

root.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch("http://localhost:8888/todos", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({ name: val })
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
				<p>
					<span>${todo.id}</span>
					${todo.name}
				</p>
				<button data-rm>Remove</button>
			</div>
		`;
	});
	return data;
})
.then(data => {
	const removeBtns = document.querySelectorAll("[data-rm]");
	removeBtns.forEach(rm => {
		rm.addEventListener("click", (e) => {
			e.target.parentElement.remove();
			data.forEach(todo => {
				const fakeId = rm.previousElementSibling.firstElementChild.textContent;
				if (parseInt(fakeId) === todo.id) {
					fetch(`http://localhost:8888/todos/${todo.id}`, {
						method: "DELETE"
					});
				}
			});
		});
	});
});