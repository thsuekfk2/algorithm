// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.
// (n은 양수이며 11보다 작다.)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((data) => +data);

let dp = [];

dp[0] = 0;
dp[1] = 1; // 1
dp[2] = 2; // 1+1, 2
dp[3] = 4; // 1+2, 2+1, 1+1+1, 3
dp[4] = 7;
// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// 1+3
// 3+1

for (let i = 5; i <= 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 0; i < T; i++) {
  console.log(dp[input[i]]);
}
