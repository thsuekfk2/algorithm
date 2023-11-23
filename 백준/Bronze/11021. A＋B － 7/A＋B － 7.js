const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

let [T, ...testCase] = input;

for (let i = 0; i < T; i++) {
  let [A, B] = testCase[i].split(" ").map(Number);
  console.log("Case #" + (i + 1) + ":", A + B);
}
