
function solution(progresses, speeds) {
  //먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses
  //작업의 개발 속도가 적힌 정수 배열 speeds
  //각 배포마다 몇 개의 기능이 배포되는지를 return
  //배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.

  //progress의 배열을 돌면서 각각 인덱스의 스피드로 계산했을 때 며칠일 걸리는지 배열에 넣기
  let dateArr = [];
  let answer = [];

  for (let i = 0; i < progresses.length; i++) {
    dateArr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  console.log("dateArr", dateArr);

  let maxDay = dateArr[0];
  //날짜 배열을 돌면서 이전보다 이후가 더 크면 push, 이전보다 이후가 작으면 카운팅
  for (let i = 0; i < dateArr.length; i++) {
    if (i > 0) {
      if (dateArr[i] > maxDay) {
        answer.push(1);
        maxDay = dateArr[i];
      } else {
        answer[answer.length - 1] += 1;
      }
    } else {
      answer.push(1);
    }
  }
  console.log(answer);
  return answer;
}
