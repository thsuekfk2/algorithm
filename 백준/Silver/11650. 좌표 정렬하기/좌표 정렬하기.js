// 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((data) => data.split(" "));

let result = "";
const array = input.map((data) => data.map((data) => +data));
const sortArray = array.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

for (let i = 0; i < sortArray.length; i++) {
  result += sortArray[i][0] + " " + sortArray[i][1] + "\n";
}

console.log(result);
