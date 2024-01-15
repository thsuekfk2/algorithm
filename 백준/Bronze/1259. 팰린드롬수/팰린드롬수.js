const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.pop();
for (let i = 0; i < input.length; i++) {
  let reverse = input[i].split("").reverse().join("");
  console.log(input[i] === reverse ? "yes" : "no");
}
