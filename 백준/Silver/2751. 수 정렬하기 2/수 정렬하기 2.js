const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [_, ...testCase] = input;
let sortArr = testCase.sort((a, b) => a - b);

console.log(sortArr.join("\n"));
