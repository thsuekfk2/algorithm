const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().split("\n");
input = input.map((data) => data.split(" "));

input.sort((a, b) => {
  return parseInt(a[0]) - parseInt(b[0]);
});

input
  .map((data) => data.join(" "))
  .map((data) => {
    console.log(data);
  });
