
function solution(participant, completion) {
  let obj = {};

  // 참가자 카운팅
  for (data of participant) {
    if (obj[data]) {
      obj[data] += 1;
    } else {
      obj[data] = 1;
    }
  }
  // 완주자 카운팅 빼기
  for (data of completion) {
    if (obj[data]) {
      obj[data] -= 1;
    }
  }

  // 카운팅이 0보다 큰 키 출력
  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}