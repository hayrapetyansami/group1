"use strict";

const numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (numberOfFilms == null || numberOfFilms === 0 || numberOfFilms < 0 || numberOfFilms == "") {
	console.log("Տեղի է ունեցել անհայտ խնդիր");
} else {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
}

for (let i = 0; i < 2; i++) {
	const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("OK");
	} else {
		console.log("ERROR");
		i--;
	}
}

console.log(personalMovieDB);