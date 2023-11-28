const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let dp = [];

dp[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= num; i++) {
  dp[i] = Array.from({ length: 9 }).fill(0);
}

for (let i = 2; i <= num; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
    }
  }
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += dp[num][i];
}
console.log(sum % 10007);
