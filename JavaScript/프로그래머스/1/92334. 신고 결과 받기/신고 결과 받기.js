
function solution(id_list, report, k) {
  let dic = {};
  let 문제아_dic = {};

  for (let i = 0; i < report.length; i++) {
    let [신고자, 신고당한놈] = report[i].split(" ");
    if (dic[신고자]) {
      dic[신고자].arr.add(신고당한놈);
    } else {
      dic[신고자] = { sum: 0, arr: new Set([신고당한놈]) };
    }

    if (문제아_dic[신고당한놈]) {
      문제아_dic[신고당한놈].add(신고자);
    } else {
      문제아_dic[신고당한놈] = new Set([신고자]);
    }
  }

  let 문제아 = Object.keys(문제아_dic).filter(
    (data) => 문제아_dic[data].size >= k
  );

  let answer = [];
  for (let id of id_list) {
    let count = 0;
    if (dic[id]) {
      문제아.map((data) => {
        if (dic[id].arr.has(data)) {
          count++;
        }
      });
      answer.push(count);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
