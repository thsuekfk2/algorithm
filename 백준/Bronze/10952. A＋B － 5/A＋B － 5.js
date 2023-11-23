// 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 입력의 마지막에는 0 두 개가 들어온다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCaseNum = input.length - 1;
let index = 0;

while (testCaseNum--) {
  let inputArray = input[index++].split(" ").map(Number);
  let sum = inputArray[0] + inputArray[1];
  console.log(sum);
}
