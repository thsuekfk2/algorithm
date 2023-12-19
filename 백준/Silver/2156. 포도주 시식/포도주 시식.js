const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...wine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//마실 수 있는 포도주 양의 최댓값을 dp[n]
const dp = new Array(n).fill(0);

dp[1] = wine[0];
dp[2] = wine[0] + wine[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wine[i - 2] + wine[i - 1],
    dp[i - 2] + wine[i - 1],
    dp[i - 1]
  );
}

console.log(dp[n]);
