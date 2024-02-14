const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
T = +T;
// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

arr = arr.map((data) => data.split(" "));

let stack = [];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "push") {
    stack.push(+arr[i][1]);
  } else if (arr[i][0] === "pop") {
    let popData = stack.pop();
    result.push(popData === undefined ? -1 : popData);
  } else if (arr[i][0] === "top") {
    result.push(stack[stack.length - 1] ?? -1);
  } else if (arr[i][0] === "size") {
    result.push(stack.length);
  } else if (arr[i][0] === "empty") {
    result.push(stack.length > 0 ? 0 : 1);
  }
}

console.log(result.join("\n"));
