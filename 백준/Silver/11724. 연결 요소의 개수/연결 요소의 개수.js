const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 문제
// 방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다.
// (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.

let ans = 0;

//정점의 개수 n, 간선의 개수 을 분리한다
let [n, m] = input[0].split(" ").map(Number);

//그래프를 초기화 한다.
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

//방문 여부를 나타내는 배열을 초기화 한다.
let visited = new Array(n + 1).fill(false);

//간선을 돌면서 그래프 연결된 점들을 넣는다.
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

//방문하지 않았으면 ans값을 1증가시키고 dfs를 돌린다.
//dfs로 그래프를 깊게 쭉 들어가다 더이상 연결된게 없으면 빠져나오고 다시 방문되지 않는 점을 찾는다.
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    ans++;
    dfs(i);
  }
}

function dfs(start) {
  //dfs로 방문을 true로 바꿔준다.
  visited[start] = true;

  //그래프를 돈다
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    //방문되지 않으면 재귀 함수로 실행한다.
    if (!visited[next]) {
      dfs(next);
    }
  }
}

console.log(ans);
