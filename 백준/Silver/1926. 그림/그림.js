const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [X, Y] = input.shift().split(" ").map(Number);

let arr = input.map((data) => data.split(" ").map(Number));
let visited = Array.from(Array(X), () => new Array(Y).fill(false));

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

let resultArray = [];
let inCount = 0;
let count = 0;

const dfs = (i, j) => {
  visited[i][j] = true;
  inCount++;

  for (let k = 0; k < 4; k++) {
    let newX = dx[k] + i;
    let newY = dy[k] + j;
    if (newX >= 0 && newX < X && newY >= 0 && newY < Y) {
      if (arr[newX][newY] === 1 && visited[newX][newY] === false) {
        dfs(newX, newY);
      }
    }
  }
};

for (let i = 0; i < X; i++) {
  for (let j = 0; j < Y; j++) {
    if (arr[i][j] === 1 && visited[i][j] === false) {
      inCount = 0;
      dfs(i, j);
      resultArray.push(inCount);
      count++;
    }
  }
}

console.log(count);
console.log(resultArray.sort((a, b) => b - a)[0] ?? 0);
