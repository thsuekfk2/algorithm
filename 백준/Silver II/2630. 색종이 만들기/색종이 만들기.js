const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = +input.shift();
input = input.map((data) => data.split(" ").map((data) => +data));

let white = 0;
let blue = 0;

function isDivision(X, Y, H) {
  let firstValue = input[X][Y];
  for (let i = X; i <= X + H - 1; i++) {
    for (let j = Y; j <= Y + H - 1; j++) {
      if (input[i][j] !== firstValue) {
        return false;
      }
    }
  }
  if (firstValue === 1) {
    blue += 1;
  } else {
    white += 1;
  }
  return true;
}

function division(X, Y, H) {
  let height = H / 2;

  if (!isDivision(X, Y, H)) {
    if (height < 1) {
      return;
    }

    division(X, Y, height);
    division(X + height, Y, height);
    division(X, Y + height, height);
    division(X + height, Y + height, height);
  }
}

division(0, 0, T);
console.log(white);
console.log(blue);
