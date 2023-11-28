const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = Number(input);

let dp = [];

for (let i = 0; i <= num; i++) {
  dp[i] = 0;
}

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= 90; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(dp[num].toString());
