const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 3 1 2 5 4
// 3 1 4 2 5

// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
// 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

//정점의 개수, 간성의 개수, 시작 정점
let [N, M, start] = input[0].split(" ").map(Number);

const dfs = (graph, startNode) => {
  let visited = [];
  let needVisited = [];

  needVisited.push(startNode);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...graph[node].sort((a, b) => a - b), ...needVisited];
    }
  }
  return visited;
};

const bfs = (graph, startNode) => {
  let visited = [];
  let needVisited = [];

  needVisited.push(startNode);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...needVisited, ...graph[node]];
    }
  }
  return visited;
};

//그래프 초기화
let graph = [];
for (let i = 0; i <= N; i++) {
  graph.push([]);
}

//그래프의 정점 넣기
for (let i = 0; i < M; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

console.log(dfs(graph, start).join(" "));
console.log(bfs(graph, start).join(" "));
