const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [T, ...testCase] = input;
let index = 0;

while (T--) {
  let caseArray = testCase[index].split(" ").map(Number);
  console.log(
    "Case #" +
      (index++ + 1) +
      ": " +
      caseArray[0] +
      " + " +
      caseArray[1] +
      " = " +
      (caseArray[0] + caseArray[1])
  );
}
