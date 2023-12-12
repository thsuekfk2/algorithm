// 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...testCase] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";

const 최대공약수 = (a, b) => {
  if (b === 0) {
    return a;
  }
  return 최대공약수(b, a % b);
};

const 최소공배수 = (a, b) => {
  return (a * b) / 최대공약수(b, a % b);
};

for (let i = 0; i < T; i++) {
  let arr = testCase[i].split(" ");
  result += 최소공배수(arr[0], arr[1]) + "\n";
}

console.log(result);
