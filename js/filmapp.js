"use strict";

const numberOfFilms = start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};

detectUserPersonalLevel();
rememberMyFilms();
yourFavoriteGenres();
showMyDB();

function start(numberOfFilms) {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}

	return numberOfFilms;
}
function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
		if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	}
}
function detectUserPersonalLevel () {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
}
function showMyDB () {
	if (personalMovieDB.privat === true) {
		console.log(personalMovieDB);
	} else {
		console.log("Մեր տվյալների բազան փակ է");
	}
}
function yourFavoriteGenres() {
	for (let i = 0; i <= 2; i++) {
		const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);

		if (genres.trim() != "" && genres != null && genres.length <= 20) {
			personalMovieDB.genres[i] = genres;
		} else {
			i--;
		}
	}
}