const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
for (let i = 1; i <= 9; i++) {
  console.log(`${num} * ${i} = ${i * num}`);
}
