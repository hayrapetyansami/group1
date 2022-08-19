"use strict";
const headerImage = document.querySelector("header img");
const adv = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.querySelector("#films");
const form = document.querySelector("#add");

headerImage.src = "img/bg2.jpg";
headerImage.alt = "Hitman's Wife's Bodyguard";
adv.forEach(adv => adv.remove());
document.title = headerImage.alt;

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde", "Reservoir Dogs", "Doctor Zhivago",
		"The Deer Hunter", "Rocky", "Crid"
	]
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = e.target.firstElementChild.value.trim();
	let valCopy = val;
	const check = document.querySelector('input[type="checkbox"]');

	if (val !== "") {
		if (val.length >= 21) {
			val = `${val.slice(0, 21)}...`;
		}
		if (check.checked) {
			console.log(`this film <${valCopy}> added to favorite`);
		}
		_DB.movies.push(val);
	}

	setSort(_DB.movies);
	createFilmsList(_DB.movies, filmsBlock);

	e.target.reset();
});

function setSort (arr) {
	arr.sort();
}
function createFilmsList (films, parent) {
	parent.innerHTML = "";
	setSort(films);

	films.forEach((film, index) => {
		parent.innerHTML += `
			<p>
				${index + 1}. ${film} 
				<span data-rm>&#128465;</span>
			</p>
		`;
	});

	document.querySelectorAll("[data-rm]").forEach((btn, i) => {
		btn.addEventListener("click", () => {
			btn.parentElement.remove();
			_DB.movies.splice(i, 1);
			createFilmsList(films, parent);
		});
	});
}

createFilmsList(_DB.movies, filmsBlock);