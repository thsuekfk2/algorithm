const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.

// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// 1+3
// 3+1
// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

let [T, ...testCase] = input;
let index = 0;

//dp배열 초기화
let dp = new Array(T + 1);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;

for (let i = 5; i <= 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

while (T--) {
  let dpIndex = Number(testCase[index++]);
  console.log(dp[dpIndex]);
}
