const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCaseNum = input.length;
let index = 0;
while (testCaseNum--) {
  let inputArray = input[index++].split(" ").map(Number);
  let sum = inputArray[0] + inputArray[1];
  console.log(sum);
}
