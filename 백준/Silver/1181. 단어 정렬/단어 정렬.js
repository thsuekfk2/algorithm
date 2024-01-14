const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();

let setData = new Set(input);
let arr = Array.from(setData);

arr.sort();
arr.sort((a, b) => {
  return a.length - b.length;
});

arr.map((data) => console.log(data));
