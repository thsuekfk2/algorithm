// 45656이란 수를 보자.
// 이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다.
// N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구해보자. 0으로 시작하는 수는 계단수가 아니다.

// 길이가 1인 계단수 : 1 2 3 4 5 6 7 8 9
// 길이가 2인 계단수 : 10 12 21 23 32 34 43 45 54 56 65 67 76 78 87 89 98
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

let dp = Array.from({ length: num });
for (let i = 0; i <= num; i++) {
  dp[i] = Array.from({ length: 9 }).fill(0);
}

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let n = 2; n <= num; n++) {
  for (let i = 0; i <= 9; i++) {
    if (i === 0) {
      dp[n][i] = dp[n - 1][i + 1] % 1000000000;
    } else if (i >= 1 && i <= 8) {
      dp[n][i] = (dp[n - 1][i - 1] + dp[n - 1][i + 1]) % 1000000000;
    } else {
      dp[n][i] = dp[n - 1][i - 1] % 1000000000;
    }
  }
}

let sum = 0;
for (let j = 0; j <= 9; j++) {
  sum += dp[num][j];
}

console.log(sum % 1000000000);
