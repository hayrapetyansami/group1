"use strict";

function finishDateSettings(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date());
	const days = Math.floor( ( t / (1000 * 60 * 60 * 24) ) );
	const seconds = Math.floor( (t / 1000) % 60 );
	const minutes = Math.floor( (t / 1000 / 60) % 60);
	const hours = Math.floor( (t / (1000 * 60 * 60) % 24) );

	return {
		"total" : t,
		"days" : days,
		"hours" : hours,
		"minutes" : minutes,
		"seconds" : seconds,
	};
}

function isSetZero (num) {
	return num >= 0 && num < 10 ? `0${num}` : num;
}

function app (parentChild, endtime) {
	const root = document.querySelector("#timer");
	const appInterval = setInterval(updateCreateAppHTML, 1000);

	updateCreateAppHTML();
	createAppHTML();

	function createAppHTML (day = 0, hour = 0, minute = 0, second = 0) {
		root.innerHTML = `
			<!-- <${parentChild}>${day}</${parentChild}> -->
			<${parentChild}>${hour}</${parentChild}>
			<${parentChild}>${minute}</${parentChild}>
			<${parentChild}>${second}</${parentChild}>
		`;
	}

	function updateCreateAppHTML() {
		const finishDateSettingsData = finishDateSettings(endtime);
		createAppHTML(
			isSetZero(finishDateSettingsData.days),
			isSetZero(finishDateSettingsData.hours),
			isSetZero(finishDateSettingsData.minutes),
			isSetZero(finishDateSettingsData.seconds)
		);

		if (finishDateSettingsData.total <= 0) {
			clearInterval(appInterval);
		}
	}
}

app("span", "2022-09-01");