// 삼각형의 두 변의 길이가 단긴 배열
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
// 나머지 한 변이 될 수 있느 정수의 개수 리턴
function solution(sides) {
    let count = 0;

    // 조건 1) sides에서 가장 큰 값을 찾기
    let sortArray  = sides.sort((a,b)=>b-a);
    let maxValue = sortArray[0];
    let minValue = sortArray[1];
    for(let i=maxValue-minValue+1; i<= maxValue; i++){
        count++;
    }
     
    // 조건 2) 가장 큰 값을 x로 지정
    for(let i=maxValue+1; i< sides[0]+sides[1]; i++){
        count++;
    }
    
    return count;
}