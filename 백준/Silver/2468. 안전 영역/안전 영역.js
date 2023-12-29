const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim(" ").split("\n");

let T = parseInt(input.shift());
let arr = input.map((data) => data.split(" ").map(Number));
let visited = Array.from(Array(T), () => new Array(T).fill(0));

let count = 0;
let dx = [1, 0, 0, -1];
let dy = [0, 1, -1, 0];
let maxCount = 0;

const dfs = (x, y, h) => {
  visited[x][y] = 1;

  for (let k = 0; k < 4; k++) {
    let newX = dx[k] + x;
    let newY = dy[k] + y;

    if (newX >= 0 && newX < T && newY >= 0 && newY < T) {
      if (arr[newX][newY] >= h && visited[newX][newY] === 0) {
        dfs(newX, newY, h);
      }
    }
  }
};
for (let h = 1; h <= 100; h++) {
  count = 0;
  visited = Array.from(Array(T), () => new Array(T).fill(0));
  for (let i = 0; i < T; i++) {
    for (let j = 0; j < T; j++) {
      if (arr[i][j] >= h && visited[i][j] === 0) {
        dfs(i, j, h);
        count++;
      }
    }
  }
  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
