const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, B] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let test = N.toString(B);
console.log(test.toUpperCase());
