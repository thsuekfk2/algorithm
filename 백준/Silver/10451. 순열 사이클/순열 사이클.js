const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]); //테스트 케이스를 저장한다.
var t = 0; //다음 테스트 케이스를 위한 변수

while (testCase--) {
  let answer = 0;
  let n = input[t + 1]; //순열의 개수
  let visited = new Array(n + 1).fill(false); ////방문 여부를 나타내는 배열을 초기화 한다.

  //그래프 초기화
  let graph = [];
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }

  //순열 배열로 간선을 이어 그래프를 만든다.
  let 순열Array = input[t + 2].split(" ").map(Number);
  for (let i = 1; i <= n; i++) {
    graph[i].push(순열Array[i - 1]);
    graph[순열Array[i - 1]].push(i);
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

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i);
    }
  }

  t += 2;
  console.log(answer);
}
