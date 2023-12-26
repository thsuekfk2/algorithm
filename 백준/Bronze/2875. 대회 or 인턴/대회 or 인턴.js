const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";

// 여학생, 남학생, 인턴쉽 인원 수
let [N, M, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim(" ")
  .split(" ")
  .map(Number);

// 2명의 여학생과 1명의 남학생이 팀을 결성해서 나가는 것이 원칙
// K명은 반드시 인턴쉽 프로그램에 참여해야 하지만 대회에 참여하지 못한다.
// 최대의 팀 수 구하기
let count = 0;
while (true) {
  if (N < 2 || M < 1 || N + M - K < 3) {
    break;
  }
  N -= 2;
  M -= 1;
  count++;
}

console.log(count);
