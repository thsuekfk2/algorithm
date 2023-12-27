const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(input.shift());
const arr = input.map((row) => row.split("").map(Number));
const visited = Array.from(Array(T), () => Array(T).fill(false));

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let countArray = [];
let inCount;

let count = 0;
let answer = [];

const dfs = (i, j) => {
  visited[i][j] = true;
  inCount++;
  for (let k = 0; k < 4; k++) {
    let newX = dx[k] + i;
    let newY = dy[k] + j;

    if (newX >= 0 && newX < T && newY >= 0 && newY < T) {
      if (arr[newX][newY] === 1 && visited[newX][newY] === false) {
        dfs(newX, newY);
      }
    }
  }
};

for (let i = 0; i < T; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 1 && visited[i][j] == false) {
      inCount = 0;
      dfs(i, j, answer);
      countArray.push(inCount);
      count++;
    }
  }
}

console.log(count);
countArray.sort((a, b) => a - b).map((data) => console.log(data));
