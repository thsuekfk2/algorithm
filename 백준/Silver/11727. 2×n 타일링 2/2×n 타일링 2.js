const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim();
const num = Number(input);

//2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
//첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

let dp = new Array(num + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}
console.log(dp[num]);
