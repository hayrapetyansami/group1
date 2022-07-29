// console.log(document); document !== HTML
// console.log(document.head); head
// console.log(document.body); body
// console.log(document.documentElement); HTML
// console.log(document.body.childNodes); //[text, div.wrapper, text, script, text, comment, text, script, text]
// console.log(document.body.children); // [div.wrapper, script, script]
// console.log(document.body.firstChild); => text => առաջին երեխա, բայց հանգույցով, 
// console.log(document.body.lastChild); script.js


// console.log(document.getElementById("current").parentNode); => first
// console.log(document.getElementById("current").parentNode.parentNode); => wrapper

// const current = document.querySelector("[data-current=\"3\"]");
// console.log(current.previousSibling.previousSibling); // <li>2</li>
// console.log(current.nextSibling.nextSibling); // <li>4</li>


// for
// console.log(document.body.childNodes);

// for (let node of document.body.childNodes) {
// 	if (node.nodeName !== "#text" && node.nodeName !== "#comment") {
// 		console.log(node);
// 	}
// }

/* 
	ՆՇՈՒՄՆԵՐ
	TEXT = /n/t
*/