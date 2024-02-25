const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let set1 = new Map();
let set2 = new Map();

let findArray = [];

for (let i = 0; i < N; i++) {
  set1.set(i, input[i]);
  set2.set(input[i], i);
}
for (let i = N; i < N + M; i++) {
  findArray.push(input[i]);
}

findArray.forEach((data) => {
  if (typeof +data === "number" && set1.get(+data - 1)) {
    console.log(set1.get(+data - 1));
  } else {
    console.log(set2.get(data) + 1);
  }
});
