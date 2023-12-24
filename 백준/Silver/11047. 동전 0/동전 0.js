const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [first, ...testCase] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [N, K] = first.split(" ").map(Number);

testCase = testCase.map(Number).sort((a, b) => a - b);

let count = 0;
for (let i = N - 1; i >= 0; i--) {
  if (K / testCase[i] >= 1) {
    count += Math.floor(K / testCase[i]);
    K = K - Math.floor(K / testCase[i]) * testCase[i];
  }
}

console.log(count);
