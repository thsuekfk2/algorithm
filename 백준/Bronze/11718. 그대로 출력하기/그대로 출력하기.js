const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(input);
