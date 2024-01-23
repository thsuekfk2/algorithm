const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
input = input[0].split(" ").map(Number);

let count = 0;
const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

input.map((data) => {
  if (isPrime(data)) {
    count++;
  }
});

console.log(count);
