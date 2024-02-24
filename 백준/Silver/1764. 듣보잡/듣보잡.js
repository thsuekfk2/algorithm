const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let set1 = new Set();
let set2 = new Set();

for (let i = 0; i < N; i++) {
  set1.add(input[i]);
}
for (let i = N; i < N + M; i++) {
  set2.add(input[i]);
}

let answer = [];

set1.forEach((v) => {
  if (set2.has(v)) answer.push(v);
});
answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));
