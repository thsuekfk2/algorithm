const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let alphabet = Array(26).fill(-1);
let inputArray = input.split("");

inputArray.forEach((data, i) => {
  if (alphabet[data.charCodeAt(0) - 97] === -1) {
    alphabet[data.charCodeAt(0) - 97] = i;
  }
});

console.log(alphabet.join(" "));
