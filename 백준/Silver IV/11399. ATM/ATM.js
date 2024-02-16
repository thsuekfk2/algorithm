const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
T = +T;
arr = arr[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let sumArr = [];
let count = 0;

while (count < T) {
  sum += arr[count];
  sumArr.push(sum);
  count++;
}

console.log(sumArr.reduce((a, c) => a + c, 0));
