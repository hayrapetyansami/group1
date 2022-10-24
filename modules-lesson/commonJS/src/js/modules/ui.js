module.exports = function create () {
	const root = document.createElement("div");
	const form = document.createElement("form");
	const input = document.createElement("input");
	const button = document.createElement("button");

	root.id = "root";
	form.id = "app-form"
	input.type = "text";
	input.placeholder = "Type here...";
	button.id = "addBtn";
	button.textContent = "ADD"


	root.append(form);
	form.append(input, button);

	return root
}