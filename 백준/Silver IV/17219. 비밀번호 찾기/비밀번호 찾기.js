const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let map = new Map();
for (let i = 0; i < N; i++) {
  let t = input[i].split(" ");
  map.set(t[0], t[1]);
}
let findArray = input.slice(N);
let result = [];

for (let i = 0; i < M; i++) {
  result.push(map.get(findArray[i]));
}

console.log(result.join("\n"));
