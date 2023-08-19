//이진수를 의미하는 두개의 문자열 bin1. bin2
//두 이진수의 합을 리턴
function solution(bin1, bin2) {
    let result = parseInt(bin1,2)+parseInt(bin2,2);
    return result.toString(2)
}