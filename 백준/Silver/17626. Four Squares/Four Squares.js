const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let n = +fs.readFileSync(filePath).toString().trim();

let dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  for (let j = 0; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);
