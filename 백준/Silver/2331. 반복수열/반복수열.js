const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [A, P] = fs.readFileSync(filePath).toString().trim().split(" ");

let arr = [Number(A)];
let lastValue;

while (true) {
  let sum = 0;
  A.split("").forEach((data) => {
    sum += data ** Number(P);
  });
  if (arr.includes(sum)) {
    lastValue = sum;
    break;
  } else {
    arr.push(sum);
    A = sum.toString();
    sum = 0;
  }
}

console.log(arr.findIndex((data) => data === lastValue));
