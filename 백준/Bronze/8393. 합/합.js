const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = Number(fs.readFileSync(filePath).toString().trim(" "));
let sum = 0;

for (let i = 1; i <= input; i++) {
  sum += i;
}
console.log(sum);
