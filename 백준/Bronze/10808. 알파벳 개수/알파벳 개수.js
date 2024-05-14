const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString();

const alphabetArray = Array.from({ length: 26 }, () => 0);

for (let i = 0; i < input.length; i++) {
  let index = input[i].charCodeAt(0) - 97;
  alphabetArray[index] += 1;
}

console.log(alphabetArray.join(" "));
