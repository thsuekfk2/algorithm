const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
T = +T;
// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

arr = arr.map((data) => data.split(" "));

let deque = [];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "push_front") {
    deque.unshift(+arr[i][1]);
  } else if (arr[i][0] === "push_back") {
    deque.push(+arr[i][1]);
  } else if (arr[i][0] === "pop_front") {
    let popData = deque.shift();
    result.push(popData === undefined ? -1 : popData);
  } else if (arr[i][0] === "pop_back") {
    let popData = deque.pop();
    result.push(popData === undefined ? -1 : popData);
  } else if (arr[i][0] === "front") {
    result.push(deque[0] ?? -1);
  } else if (arr[i][0] === "back") {
    result.push(deque[deque.length - 1] ?? -1);
  } else if (arr[i][0] === "size") {
    result.push(deque.length);
  } else if (arr[i][0] === "empty") {
    result.push(deque.length > 0 ? 0 : 1);
  }
}

console.log(result.join("\n"));
