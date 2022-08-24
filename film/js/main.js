"use strict";
const headerImage = document.querySelector("header img");
const filmsBlock = document.querySelector("#films");
const form = document.querySelector("#add");
const signInBtn = document.querySelector("[data-in]");
const signInModal = document.querySelector("[data-in-modal]");

function init () {
	headerImage.src = "img/bg2.jpg";
	
	if (headerImage.src.slice(27) === "img/bg1.jpg") {
		headerImage.alt = "Gemini Man";
	} else if (headerImage.src.slice(27) === "img/bg2.jpg") {
		headerImage.alt = "Hitman's Wife's Bodyguard";
	}

	document.querySelectorAll("#main_promo .mp").forEach(adv => adv.remove());
	document.title = headerImage.alt;
}
init();
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
	const check = document.querySelector('input[type="checkbox"]');

	if (val !== "" && val.charAt(0) !== "<" && val.charAt(0) !== ">" && val.charAt(0) !== "/" && _DB.movies.indexOf(val) === -1) {
		if (check.checked) {
			console.log(`this film <${val}> added to favorite`);
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
				${index + 1}. ${film.length >= 21 ? film.slice(0, 21)+'...' : film} 
				<span data-rm>&#128465;</span>
			</p>
		`;
	});
	removeFilmFromList("[data-rm]");
}
function removeFilmFromList(selector) {
	setSort(_DB.movies);
	document.querySelectorAll(selector).forEach((btn, i) => {
		btn.addEventListener("click", () => {
			btn.parentElement.remove();
			_DB.movies.splice(i, 1);
			createFilmsList(_DB.movies, filmsBlock);
		});
	});
}

createFilmsList(_DB.movies, filmsBlock);