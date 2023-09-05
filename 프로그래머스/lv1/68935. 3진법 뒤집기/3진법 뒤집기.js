// 10진수를 다른 진수로 변환하기 위해서는 toString()을,
// 다른 진수를 10진수로 변환하기 위해서는 parseInt()를 쓴다.
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''),3)
}