const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//최대 공약수와 최소 공배수를 출력
//24와 18의 최대 공약수 = 6,
//24와 18의 최소 공배수 = 72

const 최대공약수 = (a, b) => {
  if (b === 0) {
    return a;
  }
  return 최대공약수(b, a % b);
};

const 최소공배수 = (x, y) => {
  return (x * y) / 최대공약수(x, y);
};

console.log(최대공약수(input[0], input[1]));
console.log(최소공배수(input[0], input[1]));
