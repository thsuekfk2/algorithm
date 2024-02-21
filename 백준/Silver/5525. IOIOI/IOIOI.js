const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.shift();
let M = +input.shift();
let S = input.shift();

let p = "I";
for (let i = 0; i < N; i++) {
  p += "OI";
}

let count = 0;

for (let i = 0; i < S.length; i++) {
  if (S.slice(i, p.length + i) === p) {
    count++;
  }
}

console.log(count);
