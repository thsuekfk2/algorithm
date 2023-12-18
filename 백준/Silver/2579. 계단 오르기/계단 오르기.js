const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...testCase] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = [];
for (let i = 0; i <= T; i++) {
  dp.push(0);
}

testCase.unshift(0);
dp[1] = testCase[1];
dp[2] = testCase[1] + testCase[2];
dp[3] = Math.max(testCase[2] + testCase[3], testCase[1] + testCase[3]);

for (let i = 4; i <= T; i++) {
  dp[i] = Math.max(
    dp[i - 2] + testCase[i],
    dp[i - 3] + testCase[i - 1] + testCase[i]
  );
}

console.log(dp[T]);
