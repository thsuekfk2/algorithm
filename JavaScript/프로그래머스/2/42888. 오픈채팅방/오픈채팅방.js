
function solution(record) {
  //객체 생성
  let obj = {};

  //채팅 넣을 배열 생성
  let chatArray = [];

  for (let i = 0; i < record.length; i++) {
    // 레코드를 공백으로 구분하여 배열로 저장한다.
    let arr = record[i].split(" ");
    //만약 Enter라면
    //set에 uuid 키와 이름을 넣는다.
    //채팅 기록에 추가한다. [enter,uuid]를 추가한다.
    if (arr[0] === "Enter") {
      obj[arr[1]] = arr[2];
      chatArray.push([arr[0], arr[1]]);
    }
    //Leave라면
    //채팅 기록에 추가한다. [leave,uuid]를 추가한다.
    else if (arr[0] === "Leave") {
      chatArray.push([arr[0], arr[1]]);
    } else {
      //Change라면
      //레코드에 해당 uuid를 찾아서 이름을 바꾼다.
      obj[arr[1]] = arr[2];
    }
  }

  let answer = [];

  // 채팅기록과 uuid를 조합하여 리턴한다.
  for (let i = 0; i < chatArray.length; i++) {
    let data;

    if (chatArray[i][0] === "Enter") {
      data = `${obj[chatArray[i][1]]}님이 들어왔습니다.`;
    } else {
      data = `${obj[chatArray[i][1]]}님이 나갔습니다.`;
    }

    answer.push(data);
  }

  return answer;
}