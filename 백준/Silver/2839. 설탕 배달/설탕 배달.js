const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

let count = 0;

while (input > 0) {
  if (input % 5 === 0) {
    input -= 5;
  } else {
    input -= 3;
  }
  count++;
}
console.log(input !== 0 ? -1 : count);
