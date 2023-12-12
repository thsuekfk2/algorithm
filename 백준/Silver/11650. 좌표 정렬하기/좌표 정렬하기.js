const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [T, ...testCase] = input;

let arr = [];
let results = "";

for (let i = 0; i < T; i++) {
  let dev = testCase[i].split(" ");
  arr.push(dev);
}

arr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return Number(a[0]) - Number(b[0]);
    }
    return Number(a[1]) - Number(b[1]);
  })
  .forEach((coords) => {
    results += `${coords[0]} ${coords[1]}\n`;
  });

console.log(results);
