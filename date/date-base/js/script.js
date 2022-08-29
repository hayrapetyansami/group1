"use strict";

// մենք ստանում ենք դեյթան
const date = new Date();
console.log(date.getTime());

const hours = date.getHours(); // ժամ
const minutes = date.getMinutes(); // րոպե
const seconds = date.getSeconds(); // վայրկյան
const miliSeconds = date.getMilliseconds(); // միլիվայրկյան

console.log(`${hours} : ${minutes} : ${seconds} : ${miliSeconds}`);

console.log(date.toLocaleString()); // Տարի, Ամիս, Օր, Ժամ, Րոպե, Վայրկյան

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone); // Asia/Yerevan

console.log(date.getFullYear()); // թվական
console.log(date.getMonth()); // ամիս + 1
console.log(date.getDay()); // շաբաթվա օր, օրինակ կիրակին = 0 ?
console.log(date.getDate()); // էսօրվա օրը / 23։59։59ից առաջ

// մենք տալիս ենք մեր ուզած դեյթան
const fakeDate = new Date();
fakeDate.setFullYear(1993)
fakeDate.setMonth(11)
fakeDate.setDate(1)
fakeDate.setHours(16)
console.log(fakeDate);

// ստուգում ենք մեր կոդի <Performance>-ը
let start = new Date();

for (let i = 0; i < 500000; i++) {
	let some = i ** 2;
}

let finished = new Date();

console.log(`ժամանակը։ ${finished - start} միլիվայրկյան`);
