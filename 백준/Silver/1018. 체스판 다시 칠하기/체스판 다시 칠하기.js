const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [T, ...arr] = input;
const [X, Y] = T.split(" ").map(Number);

let countArray = [];
let line = ["WBWBWBWB", "BWBWBWBW"];

//8*8 위치 조정
for (let w = 0; w <= X - 8; w++) {
  for (let h = 0; h <= Y - 8; h++) {
    // 두가지 경우
    for (let z = 0; z < 2; z++) {
      let count = 0;
      //8*8 돌기
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          let current = arr[w + x][h + y];
          if (current !== line[(x + z) % 2][y]) count++;
        }
      }
      countArray.push(count);
    }
  }
}
console.log(Math.min(...countArray));
