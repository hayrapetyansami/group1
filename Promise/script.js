"use strict";

// resolve => ամեն ինչ բարեհաջող է անցել
// reject => մեր խնդրանքը մերժվել է

console.log("Պատրաստվում ենք միանալ սերվերին․․․");

const request = new Promise((resolve, reject) =>{
	setTimeout(() => {
		console.log("խնդրում ենք սպասել...");
	
		const product = {
			name: "Google Pixel 7",
			price: 1033
		};

		resolve(product);
	}, 2000);
});

request.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.status = "Վաճառված է";
			resolve(data)
			// reject();
		}, 1500);
	});
}).then(data => {
	data.isAnlocked = true;
	return data;
}).then(data => {
	console.log(data);
}).catch((e) => {
	// throw new Error("Տեղի է ունեցել խնդիր");
	console.error("Տեղի է ունեցել խնդիր")
}).finally(() => {
	console.log("Finnaly");
});


const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(2000), test(4000), test(6000, test(10000))])
// .then(() => {
// 	console.log("Բոլորը աշխատեցին");
// });

// Promise.race([test(10), test(4000), test(6000, test(10000))])
// .then(() => console.log("Race is working..."));