const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.

let num = input[0];
let dp = Array.from({ length: num + 1 }).fill(0);

//dp[1] = 0
//dp[2] = dp[1]+1 = 1

//크기 비교 후 작은것으로 넣기
//dp[3] = dp[2]+1 = 2
//dp[3] = dp[3 / 3] + 1 = dp[1] + 1 = 1

for (let i = 2; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}

console.log(dp[num]);
