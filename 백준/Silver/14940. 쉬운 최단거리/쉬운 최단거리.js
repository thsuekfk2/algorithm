const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let graph = input.map((data) => data.split(" ").map(Number));

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

const answerArray = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

let findIndex = [];
// 2 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 2) {
      findIndex.push(i);
      findIndex.push(j);
    }
  }
}

let [X, Y] = findIndex;

// BFS
const bfs = () => {
  const queue = [[X, Y]];
  visited[X][Y] = 1;

  while (queue.length) {
    const [nowX, nowY] = queue.shift();

    const d = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];
    for (let [x, y] of d) {
      if (
        nowX + x >= 0 &&
        nowY + y >= 0 &&
        nowX + x < N &&
        nowY + y < M &&
        graph[nowX + x][nowY + y] &&
        !visited[nowX + x][nowY + y]
      ) {
        visited[nowX + x][nowY + y] = 1;
        answerArray[nowX + x][nowY + y] = answerArray[nowX][nowY] + 1;
        queue.push([nowX + x, nowY + y]);
      }
    }
  }
};

bfs();

answerArray.forEach((line, i) => {
  line.forEach((spot, j) => {
    if (!spot && graph[i][j] === 1) {
      answerArray[i][j] = -1;
    }
  });
  console.log(line.join(" "));
});
