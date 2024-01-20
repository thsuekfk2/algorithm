const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let maxNum = Math.max(...input);

console.log(maxNum);
console.log(input.findIndex((data) => data === maxNum) + 1);
