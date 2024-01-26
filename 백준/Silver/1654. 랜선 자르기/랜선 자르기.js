const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [K, N] = T.split(" ").map(Number);
input = input.map(Number);

let count = 0;
let max = Math.max(...input);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  for (let i = 0; i < input.length; i++) {
    count += Math.floor(input[i] / mid);
  }

  if (count >= N) {
    min = mid + 1;
    count = 0;
  } else {
    max = mid - 1;
    count = 0;
  }
}

console.log(max);
