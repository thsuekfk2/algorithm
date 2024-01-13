const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const mapData = new Map();
const arr = input.split("");
for (let i = 0; i < arr.length; i++) {
  let string = arr[i].toUpperCase();
  let count = mapData.get(string) ?? 0;
  mapData.set(string, count + 1);
}
let sortArr = [...mapData].sort((a, b) => b[1] - a[1]);
console.log(
  sortArr.length > 1 && sortArr[0][1] === sortArr[1][1] ? "?" : sortArr[0][0]
);
