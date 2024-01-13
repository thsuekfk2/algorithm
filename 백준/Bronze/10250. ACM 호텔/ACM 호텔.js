const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);

let arr = [];
for (let i = 0; i < T; i++) {
  arr.push(input[i + 1].split(" ").map(Number));
}
let nAnswer = "";
for (let i = 0; i < T; i++) {
  let H = arr[i][0];
  let W = arr[i][1];
  let person = arr[i][2];

  let 층 = person % H;
  if (층 === 0) {
    층 = H;
  }
  let 호 = Math.ceil(person / H);
  호 < 10 ? (호 = String(0) + 호) : 호;

  nAnswer += `${층}${호}` + "\n";
}
console.log(nAnswer);
