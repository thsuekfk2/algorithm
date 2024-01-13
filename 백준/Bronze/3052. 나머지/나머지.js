const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let setData = new Set();

input.forEach((data) => {
  setData.add(data % 42);
});

console.log(setData.size);
