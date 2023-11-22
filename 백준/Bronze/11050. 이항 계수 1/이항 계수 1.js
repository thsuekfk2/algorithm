const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//점화식을 이용하여 이항계수 구하기 (DP 활용)
//array[i][j] = array[i-1][j] + array[i-1][j-1] 의 점화식을 이용

let N = input[0];
let K = input[1];

//dp 배열 초기화
let dp = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  dp[i] = new Array(N + 1).fill(0);
}

//초기화

//조합 예시
//5C0 = 1가지
//5C5 = 1가지
//5C1 = 5가지
for (let i = 0; i <= N; i++) {
  dp[i][0] = 1;
  dp[i][i] = 1;
  dp[i][1] = i;
}

//점화식으로 배열 완성하기
for (let i = 2; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
  }
}

console.log(dp[N][K]);
