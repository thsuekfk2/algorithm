const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [node, edge, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

node = +node; // 노드
edge = +edge; // 간선
input = input.map((data) => data.split(" ").map(Number));

// 방문 여부를 나타내는 배열 생성
let visited = Array.from({ length: node + 1 }, () => false);

// 그래프 생성
let graph = Array.from({ length: node + 1 }, () => []);

for (let i = 0; i < edge; i++) {
  // 양방향 그래프이므로 start와 end 노드 간에 연결 설정
  let [start, end] = input[i];
  graph[start].push(end);
  graph[end].push(start);
}

let answer = 0;

const dfs = (i) => {
  for (let j = 0; j < graph[i].length; j++) {
    let next = graph[i][j];
    // console.log("i:", i, "j:", j, "next:", next);
    if (!visited[next]) {
      visited[next] = true;
      answer++;
      dfs(next);
    }
  }
};

visited[1] = true;
dfs(1);

console.log(answer);
// console.log(graph);
