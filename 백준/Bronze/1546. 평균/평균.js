const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, input] = fs.readFileSync(filePath).toString().trim().split("\n");

T = Number(T);
let arr = input.split(" ").map(Number);
let max = Math.max(...arr);
let sum = 0;

arr.map((data) => {
  sum += (data / max) * 100;
});

console.log(sum / T);
