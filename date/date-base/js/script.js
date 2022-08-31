"use strict";

const date = new Date();

// DATE API
console.log(date.getFullYear()); // թվականն ենք ստանում - 2022
console.log(date.getMonth()); // ամիս -1
console.log(date.getDay()); // ստանում ենք շաբաթվա օրըն կիրակին = 0
console.log(date.getDate()); // ստանում ենք էս օրը, 23։59։59։999ից առաջ

// STANDART DATE & TIME API
const dnt = new Date()
console.log(dnt.toDateString()); // Wed Aug 31 2022
console.log(dnt.toTimeString()); // 13:31:01 GMT+0400 (Armenia Standard Time)

// LOCAL DATE & TIME
const localDNT = new Date();
console.log(localDNT.toLocaleTimeString());
console.log(localDNT.toLocaleDateString());
console.log(localDNT.toLocaleString());

// TIME API
const timeDate = new Date();

console.log(timeDate.getHours());          // ժամ
console.log(timeDate.getMinutes());        // րոպե
console.log(timeDate.getSeconds());        // վայրկյան
console.log(timeDate.getMilliseconds());   // միլիվայրկյան
console.log(timeDate.getTime());           // միլիվարկյան տվյալ պահից
console.log(timeDate.getTimezoneOffset()); // ժամային գոտի -240 րոպե

// TIME ZONE - Asia/Yerevan
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

// SET
const dSet = new Date();
dSet.setFullYear(353);
dSet.setMonth(7);
dSet.setDate(15);
dSet.setHours(21);
dSet.setMinutes(24);
dSet.setSeconds(53);
dSet.setMilliseconds(999);

console.log(dSet);

// ստուգում ենք մեր կոդի <Performance>-ը
let start = new Date();

let some = 0;
for (let i = 0; i < 500000; i++) {
	some = i ** 2;
}
console.log(some);

let end = new Date();

console.log(`ժամանակը։ ${end - start} միլիվայրկյան`);