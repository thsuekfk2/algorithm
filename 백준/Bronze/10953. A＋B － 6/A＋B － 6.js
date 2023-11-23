const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
let testCaseNum = Number(input[0]);

let index = 1;
while (testCaseNum--) {
  let arr = input[index++];
  console.log(
    arr
      .split(",")
      .map(Number)
      .reduce((a, c) => a + c, 0)
  );
}
