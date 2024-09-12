require("./xyz");
const { multiply } = require("./calculate/multiply");
const { calculateSum } = require("./calculate/sum");
const data = require("./data");

var name = "Namaste Node 🚀";

let a = 10;
let b = 20;

calculateSum(a, b);
multiply(a, b);

console.log(data);
