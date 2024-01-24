const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = +fs.readFileSync(filePath).toString().trim();

let answer = 0;

for (let i = 1; i <= n; i++) {
  if (i % 5 === 0) answer++;
  if (i % 25 === 0) answer++;
  if (i % 125 === 0) answer++;
}

console.log(answer);
