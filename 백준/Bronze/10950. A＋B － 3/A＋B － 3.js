const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);
let index = 1;
while (testCase--) {
  let inputArr = input[index++].split(" ").map(Number);
  let sum = inputArr[0] + inputArr[1];
  console.log(sum);
}
