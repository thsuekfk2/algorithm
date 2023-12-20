const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...testCase] = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = [];
testCase.forEach((data) => arr.push(data.split(" ").map(Number)));

arr.sort((a, b) => {
  if (b[1] === a[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let max = 0;
let count = 0;
for (let i = 0; i < T; i++) {
  if (max <= arr[i][0]) {
    max = arr[i][1];
    count++;
  }
}

console.log(count);
