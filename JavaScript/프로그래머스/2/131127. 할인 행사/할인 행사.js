
function solution(want, number, discount) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }

  for (let start = 0; start <= discount.length - 10; start++) {
    let tmp = {};

    for (let day = start; day < start + 10; day++) {
      if (tmp[discount[day]]) {
        tmp[discount[day]] += 1;
      } else {
        tmp[discount[day]] = 1;
      }
    }

    let isValid = true;

    for (data in obj) {
      if (obj[data] !== tmp[data]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      count++;
    }
  }
  console.log(count);
  return count;
}