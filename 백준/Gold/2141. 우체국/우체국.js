const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

N = +N;
input = input.map((data) => data.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);

let sum = 0;
let totalPerson = 0;

for (let i = 0; i < N; i++) {
  totalPerson += input[i][1];
}

const getSolution = () => {
  for (let i = 0; i < N; i++) {
    sum += input[i][1];
    if (totalPerson / 2 <= sum) {
      console.log(input[i][0]);
      return;
    }
  }
  console.log(input[0][0]);
};

getSolution();
