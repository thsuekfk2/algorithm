const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const visited = Array(100001).fill(0);

let ans = 0;

// BFS
const bfs = () => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length) {
    const [now, depth] = queue.shift();

    if (now === K) return depth;

    for (let nx of [now + 1, now - 1, now * 2]) {
      if (nx >= 0 && nx <= 100000 && visited[nx] === 0) {
        visited[nx] = true;
        queue.push([nx, depth + 1]);
      }
    }
  }
};

ans = bfs();
console.log(ans);
