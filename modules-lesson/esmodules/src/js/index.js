// import { first, second, hello } from "./modules/test.js";
// import { first as one } from "./modules/test.js";
// import * as data from "./modules/test.js";

// console.log(data["first"]);
// console.log(data.second);
// console.log(data.hello("John"));

import obj, * as data from "./modules/test"; // es6 module

const {first, second, hello:hi} = data; // destructuring

console.log(hi(obj.name));

console.log(first);
console.log(second);
console.log(first + second);

//  * = ԱՄԵՆ ԻՆՉ