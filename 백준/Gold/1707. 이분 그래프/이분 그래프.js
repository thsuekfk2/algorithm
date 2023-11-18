const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 문제
// 그래프의 정점의 집합을 둘로 분할하여, 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있을 때,
// 그러한 그래프를 특별히 이분 그래프 (Bipartite Graph) 라 부른다.
// 그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 구성되어 있는데, 첫째 줄에 테스트 케이스의 개수 K가 주어진다.
// 각 테스트 케이스의 첫째 줄에는 그래프의 정점의 개수 V와 간선의 개수 E가 빈 칸을 사이에 두고 순서대로 주어진다.
// 각 정점에는 1부터 V까지 차례로 번호가 붙어 있다. 이어서 둘째 줄부터 E개의 줄에 걸쳐 간선에 대한 정보가 주어지는데,
// 각 줄에 인접한 두 정점의 번호 u, v (u ≠ v)가 빈 칸을 사이에 두고 주어진다.

// 출력
// K개의 줄에 걸쳐 입력으로 주어진 그래프가 이분 그래프이면 YES, 아니면 NO를 순서대로 출력한다.

//힌트 :? 이분 그래프는 인접한 정점 끼리는 다른 색으로 표시한다!

var t = 0; //다음 테스트 케이스를 위한 변수
let k = Number(input[0]); //테스트 케이스 개수

//테스트 케이스 두번 실행
while (k--) {
  let isEven = true; //이분 그래프 판별 변수

  let [v, e] = input[t + 1].split(" ").map(Number); //정점, 간선
  let visited = new Array(v + 1).fill(false); ////방문 여부를 나타내는 배열을 초기화 한다.
  let colorArray = new Array(v + 1).fill(0); //인접한 정점끼리 다른 색으로 표시하기 위한 color 배열
  let graph = Array.from({ length: v + 1 }, () => []); //그래프를 초기화 한다.

  //간선을 돌면서 그래프 연결된 점들을 넣는다.
  for (let i = t + 1; i <= t + e; i++) {
    let [from, to] = input[i + 1].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  function dfs(start, color) {
    //dfs로 방문을 true로 바꿔준다.
    visited[start] = true;
    //컬러 배열에 dfs로 color를 넣어준다.
    colorArray[start] = color;

    //그래프를 돈다
    for (let i = 0; i < graph[start].length; i++) {
      let next = graph[start][i];
      //방문되지 않으면 재귀 함수로 실행한다.
      if (!visited[next]) {
        //직전 정점과 다른 색의 컬러를 넣기 위해 3-color를 해준다. (1, 2 반복 형태)
        dfs(next, 3 - color);
      } else if (colorArray[start] === colorArray[next]) {
        //정점이 같은 컬러 인 경우 이분그래프가 아니므로 isEven=false를 해준다.
        isEven = false;
      }
    }
  }

  for (let i = 1; i <= v; i++) {
    //이분 그래프이면서 방문되지 않은 경우 dfs를 돈다.
    if (isEven && !visited[i]) {
      dfs(i, 1);
    }
  }

  if (isEven) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  t += e + 1; //다음 케이스를 위해 e+1을 더해준다.
}