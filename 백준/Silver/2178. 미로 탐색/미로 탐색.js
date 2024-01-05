const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const visited = input.map((v) => v.split("").map(Number));
const [goalY, goalX] = [N - 1, M - 1]; // 도착 위치

const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

// BFS
const bfs = () => {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [curY, curX, move] = queue.shift();

    if (goalY === curY && goalX === curX) return move;

    for (let i = 0; i < 4; i++) {
      const ny = curY + dx[i];
      const nx = curX + dy[i];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && visited[ny][nx]) {
        visited[ny][nx] = 0;
        queue.push([ny, nx, move + 1]);
      }
    }
  }
};

console.log(bfs());
