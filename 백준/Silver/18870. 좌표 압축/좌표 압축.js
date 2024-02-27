const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = +input.shift();
input = input[0].split(" ").map((data) => +data);

let answerArray = [];
let set = new Set([...input].sort((a, b) => a - b));
let object = {};

[...set].forEach((data, i) => {
  object[data] = i;
});

for (let i = 0; i < T; i++) {
  answerArray.push(object[input[i]]);
}

console.log(answerArray.join(" "));
