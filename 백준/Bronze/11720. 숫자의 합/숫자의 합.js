const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [, ...testCase] = input;

console.log(
  testCase[0]
    .split("")
    .map(Number)
    .reduce((a, c) => a + c, 0)
);
