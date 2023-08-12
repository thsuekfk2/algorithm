// 문자열 my_string , 정수 num1, num2 가 매개변수로 주어질 때
// my_string에서 인덱스 num1과 num2에 해당하는 문자열을 바꾼 문자열 리턴
function solution(my_string, num1, num2) {
    let myStringArray = [...my_string];
    [myStringArray[num1],[myStringArray[num2]]] = [myStringArray[num2],myStringArray[num1]];
    return myStringArray.join('');
}