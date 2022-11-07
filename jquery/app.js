import $ from "jquery";

$("#text").on("click", function () {
	console.log($(this).html());
});

console.log($("button"));