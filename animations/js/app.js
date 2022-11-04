const btn = document.querySelector("#one");
const box = document.querySelector("#box");
const img = document.querySelector("img");
const imgBtn = document.querySelector("#two");

// custom animation
// function ankapAnimation () {
// 	let pos = 0;
	
// 	const id = setInterval(frame, 10);
// 	function frame () {
// 		if (pos === 300) {
// 			clearInterval(id)
// 		} else {
// 			pos++;
// 			box.style.cssText = `
// 				top: ${pos}px;
// 				left: ${pos}px;
// 			`;
// 		}
// 	}
// }

// btn.addEventListener("click", ankapAnimation);
let pos = 0;
function reqAnimation () {
	pos++;
	box.style.cssText = `
		top: ${pos}px;
		left: ${pos}px;
	`;

	if (pos < 300) {
		requestAnimationFrame(reqAnimation);
	}
}

btn.addEventListener("click", function () {
	requestAnimationFrame(reqAnimation);
});

const id = requestAnimationFrame(reqAnimation);
cancelAnimationFrame(id);


let animalAnimation;

imgBtn.addEventListener("click", () => {
	if (!animalAnimation) {
		animalAnimation = img.animate([
			{transform: "scale(0.1)", opacity: "0.1", filter: "sepia(100%)"},
			{transform: "scale(0.2)", opacity: "0.2"},
			{transform: "scale(0.3)", opacity: "0.3"},
			{transform: "scale(0.4)", opacity: "0.4"},
			{transform: "scale(0.5)", opacity: "0.5"},
			{transform: "scale(0.6)", opacity: "0.6"},
			{transform: "scale(0.7)", opacity: "0.7"},
			{transform: "scale(0.8)", opacity: "0.8"},
			{transform: "scale(0.9)", opacity: "0.9"},
			{transform: "scale(1)", opacity: "1", filter: "sepia(0%)"}
		], {
			duration: 3000,
			iterations: Infinity
		});
	} else if (animalAnimation.playState === "paused") {
		animalAnimation.play();
	} else {
		animalAnimation.pause();
	}
});


// // {transform: "translateY(0px)"},
// // {transform: "translateY(100px)"},
// // {transform: "translateY(-100px)"},
// // {transform: "translateY(0px)"},