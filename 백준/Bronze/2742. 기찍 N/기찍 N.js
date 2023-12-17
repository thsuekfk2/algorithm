const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let T = fs.readFileSync(filePath).toString().trim();

let result = "";
let tmpT = T;

for (let i = 0; i < T; i++) {
  result += tmpT-- + "\n";
}

console.log(result);
