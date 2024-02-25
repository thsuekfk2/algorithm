const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
T = +T;

let visited1 = Array.from(Array(T), () => new Array(T).fill(false));
let visited2 = Array.from(Array(T), () => new Array(T).fill(false));

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

let 일반Array = [];
let 적록색약Array = [];

let inCount = 0;
let 적록색약inCount = 0;

const dfs = (i, j, startString) => {
  visited1[i][j] = true;
  for (let k = 0; k < 4; k++) {
    let newX = dx[k] + i;
    let newY = dy[k] + j;
    if (newX >= 0 && newX < T && newY >= 0 && newY < T) {
      if (input[newX][newY] === startString && visited1[newX][newY] === false) {
        inCount++;
        dfs(newX, newY, startString);
      }
    }
  }
};

const 적록색약dfs = (i, j, startString) => {
  visited2[i][j] = true;
  for (let k = 0; k < 4; k++) {
    let newX = dx[k] + i;
    let newY = dy[k] + j;
    if (newX >= 0 && newX < T && newY >= 0 && newY < T) {
      let nowColor = input[newX][newY];
      if (
        ((nowColor === "R" && startString === "G") ||
          (nowColor === "G" && startString === "R") ||
          nowColor === startString) &&
        visited2[newX][newY] === false
      ) {
        적록색약inCount++;
        적록색약dfs(newX, newY, startString);
      }
    }
  }
};

for (let i = 0; i < T; i++) {
  for (let j = 0; j < T; j++) {
    if (visited2[i][j] === false) {
      적록색약inCount = 1;
      적록색약dfs(i, j, input[i][j]);
      적록색약Array.push({ count: 적록색약inCount, startString: input[i][j] });
    }
  }
}

for (let i = 0; i < T; i++) {
  for (let j = 0; j < T; j++) {
    if (visited1[i][j] === false) {
      inCount = 1;
      dfs(i, j, input[i][j]);
      일반Array.push({ count: inCount, startString: input[i][j] });
    }
  }
}

console.log(일반Array.length + " " + 적록색약Array.length);
