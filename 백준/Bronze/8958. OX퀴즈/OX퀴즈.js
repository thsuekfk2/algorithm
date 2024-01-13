const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [T, ...arr] = input;
const testCase = Number(T);
let resultArr = [];

for (let i = 0; i < T; i++) {
  let result = 0;
  let count = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "O") {
      count += 1;
      result += count;
    } else {
      count = 0;
    }
  }
  resultArr.push(result);
}

resultArr.map((data) => {
  console.log(data);
});
