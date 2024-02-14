const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
T = +T;
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

arr = arr.map((data) => data.split(" "));

let queue = [];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "push") {
    queue.push(+arr[i][1]);
  } else if (arr[i][0] === "pop") {
    let popData = queue.shift();
    result.push(popData === undefined ? -1 : popData);
  } else if (arr[i][0] === "front") {
    result.push(queue[0] ?? -1);
  } else if (arr[i][0] === "back") {
    result.push(queue[queue.length - 1] ?? -1);
  } else if (arr[i][0] === "size") {
    result.push(queue.length);
  } else if (arr[i][0] === "empty") {
    result.push(queue.length > 0 ? 0 : 1);
  }
}

console.log(result.join("\n"));
