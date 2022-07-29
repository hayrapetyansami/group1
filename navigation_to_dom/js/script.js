const _current = document.getElementById("current");
const current = document.querySelector("[data-current=\"3\"]")

// old
// console.log(document.body.firstChild) // node
// console.log(document.body.lastChild); // script
// console.log(document.body.childNodes); // node
// console.log(_current.parentNode); // .first
// console.log(current.nextSibling); // node
// console.log(current.previousSibling); // node


//new
console.log(document.body.firstElementChild) // element
console.log(document.body.lastElementChild); // element
console.log(document.body.children); // HTMLCollection
console.log(_current.parentElement) // .first
console.log(current.previousElementSibling); // <li>2</li>
console.log(current.nextElementSibling); // <li>4</li>