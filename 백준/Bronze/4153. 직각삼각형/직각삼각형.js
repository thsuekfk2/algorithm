const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((data) => data.split(" ").map(Number));
//각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.

let result = [];
arr.map((data) => data.sort((a, b) => a - b));
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i][2] ** 2 === arr[i][0] ** 2 + arr[i][1] ** 2) {
    result.push("right");
  } else {
    result.push("wrong");
  }
}

console.log(result.join("\n"));
