const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(arr.shift());
let NArray = arr.shift().split(" ").map(Number);
NArray.sort((a, b) => a - b);
let M = Number(arr.shift());
let MArray = arr.shift().split(" ").map(Number);

const isBinarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (target === arr[mid]) {
      return 1;
    } else {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return 0;
};

let resultArr = [];
MArray.map((data) => {
  resultArr.push(isBinarySearch(NArray, data));
});
console.log(resultArr.join("\n"));
