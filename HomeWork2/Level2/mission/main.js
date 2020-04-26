// const sum = require('./sum');

// var result = sum(1, 3);
// console.log("sum result : ", result);

// const sumModule = require("./sum");

// var result = sumModule.sum(1, 3);
// console.log("sum result : ", result);

const calculator = require("./calculator");

var addResult = calculator.add(1, 3, 5, 7);
console.log("Add result : ", addResult);

var subResult = calculator.substract(5, 1);
console.log("substract result : ", subResult);

var multiplyResult = calculator.multiply(3, 3);
console.log("multiply result : ", multiplyResult);

var divideResult = calculator.divide(9, 3, 3);
console.log("divide result : ", divideResult)