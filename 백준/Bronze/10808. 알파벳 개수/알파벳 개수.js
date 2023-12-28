const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let alphabet = Array(26).fill(0);
let inputArray = input.split("");

inputArray.forEach((data, i) => {
  let count = parseInt(alphabet[data.charCodeAt(0) - 97]);
  alphabet[data.charCodeAt(0) - 97] = count + 1;
});

console.log(alphabet.join(" "));
