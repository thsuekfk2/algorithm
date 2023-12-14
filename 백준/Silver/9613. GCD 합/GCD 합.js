const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...testCase] = fs.readFileSync(filePath).toString().trim().split("\n");

const 최대공약수구하기 = (a, b) => {
  if (b === 0) {
    return a;
  }
  return 최대공약수구하기(b, a % b);
};

for (let i = 0; i < T; i++) {
  let sum = 0;
  let arr = testCase[i].split(" ").map(Number);

  let newIter = arr.shift();
  arr.sort((a, b) => b - a);
  for (let j = 0; j < newIter; j++) {
    for (let k = j + 1; k < newIter; k++) {
      sum += 최대공약수구하기(arr[j], arr[k]);
    }
  }
  console.log(sum);
}
