const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//A : <3, 6, 2, 7, 5, 1, 4>
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let findValue = arr[K - 1];
let result = [];
while (arr.length > 0) {
  let t = arr.shift();
  if (t === findValue) {
    result.push(t);
    if (arr.length <= K) {
      findValue = arr[(K % arr.length !== 0 ? K % arr.length : arr.length) - 1];
    } else {
      findValue = arr[K - 1];
    }
  } else {
    arr.push(t);
  }
}

console.log("<" + result.join(", ") + ">");
