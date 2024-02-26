const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
input = input.map((data) => +data);

//시간 초과
// function fibonacci(n, index) {
//   if (n == 0) {
//     if (resultMap.has(index + "zero")) {
//       resultMap.set(index + "zero", resultMap.get(index + "zero") + 1);
//     } else {
//       resultMap.set(index + "zero", 1);
//     }
//     return 0;
//   } else if (n == 1) {
//     if (resultMap.has(index + "one")) {
//       resultMap.set(index + "one", resultMap.get(index + "one") + 1);
//     } else {
//       resultMap.set(index + "one", 1);
//     }
//     return 1;
//   } else {
//     return fibonacci(n - 1, index) + fibonacci(n - 2, index);
//   }
// }

// for (let i = 0; i < T; i++) {
//   fibonacci(input[i], i);
//   console.log(resultMap.get(i + "zero") ?? 0, resultMap.get(i + "one") ?? 0);
// }

for (let i = 0; i < T; i++) {
  const n = input[i];

  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= n; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }
  console.log(fibonacci[n].join(" "));
}
