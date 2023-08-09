// 가위 2
// 바위 0
// 보 5
// 이기는 경우를 순서대로 문자열 리턴

function solution(rsp) {
    let answer = '';
    let rspWinData = {
        "2" : "0",
        "0" : "5",
        "5" : "2"
    };
    
    [...rsp].forEach((data) => answer += rspWinData[data]);
    
    return answer;
}