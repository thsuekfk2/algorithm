const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
//각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.
T = Number(T);
arr = arr.map((data) => data.split(""));

let result = 0;

for (let i = 0; i < T; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let s = arr[i][j];
    result += s === "(" ? 1 : -1;
    if (result < 0) break;
  }
  if (result === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  result = 0;
}
