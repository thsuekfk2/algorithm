// 11727
//2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = Number(fs.readFileSync(filePath).toString());

let dp = [];

dp[1] = 1;
dp[2] = 3;
dp[3] = 5;
dp[4] = 11;

for (let i = 5; i <= input; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}

console.log(dp[input]);
