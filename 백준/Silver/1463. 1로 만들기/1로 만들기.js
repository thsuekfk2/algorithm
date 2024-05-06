// 1463
// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = Number(fs.readFileSync(filePath).toString());

let dp = [];

dp[0] = 0;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= input; i++) {
  //1을 뺀 값
  dp[i] = dp[i - 1] + 1;
  //3으로 나누어 떨어지면, 3으로 나눈 값과 1뺀 값과 비교
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  //2로 나누어 떨어지면, 2로 나눈 값과 1뺀 값과 비교
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp[input]);
