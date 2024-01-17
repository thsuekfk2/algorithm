const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = +fs.readFileSync(filePath).toString().trim();

let num = 666;
let count = 1;
while (count !== n) {
  num++;
  if (String(num).includes("666")) count++;
}
console.log(num);