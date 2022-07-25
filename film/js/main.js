"use strict";
const headerImage = document.querySelector("header img");
const adv = document.querySelectorAll("#main_promo .mp");
const pageTitle = document.querySelector("title");
const films = document.querySelector("#films");

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde", "Reservoir Dogs", "Doctor Zhivago",
		"The Deer Hunter", "Rocky", "Crid"
	]
}
_DB.movies.sort();

headerImage.src = "img/bg2.jpg";
headerImage.alt = "Hitman's Wife's Bodyguard";
adv.forEach(adv => adv.remove());
pageTitle.textContent = headerImage.alt;

_DB.movies.forEach((film, index) => {
	films.innerHTML += `
		<p>
			${index + 1}. ${film} <span data-rm>&#128465;</span>
		</p>
	`;
});