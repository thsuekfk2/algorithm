const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [B, N] = fs.readFileSync(filePath).toString().trim().split(" ");
let tt = parseInt(B, Number(N));
console.log(tt);
