require("./xyz");
// const { multiply } = require("./calculate/multiply");
// const { calculateSum } = require("./calculate/sum");
// const data = require("./data");

const { calculateSum, multiply } = require("./calculate");

var name = "Namaste Node 🚀";

var p = 10;
let b = 20;
let c = {};

calculateSum(b, p);
multiply(b, p);

// console.log(data);
// console.log(setTimeout === globalThis.setTimeout);

console.log(Object.keys(globalThis));
// for (const property in global) {
//   console.log(property, global[property]);
// }
