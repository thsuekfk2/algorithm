const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = "";
let length = 0;

for (let i = 0; i < input.length; i++) {
  answer += input[i];

  length += 1;
  if (length !== 0 && length % 10 === 0) {
    answer += "\n";
    length = 0;
  }
}

console.log(answer);
