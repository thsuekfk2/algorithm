const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
T = Number(T);

let index = 0;

for (let i = 0; i < T; i++) {
  let [totalCount, findCount] = input[index].split(" ").map(Number);
  let array = input[index + 1].split(" ").map(Number);
  let innerCnt = 0;

  while (array.length > 0) {
    let max = Math.max(...array);
    let now = array.shift();

    if (now === max) {
      innerCnt++;
      if (findCount === 0) {
        console.log(innerCnt);
        break;
      }
    } else {
      array.push(now);
    }
    if (findCount === 0) {
      findCount = array.length - 1;
    } else {
      findCount -= 1;
    }
  }
  index += 2;
}
