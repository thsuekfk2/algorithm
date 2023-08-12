// 정수 배열 numbers 에서 두개를 곱해서 만들 수 있는 최댓값 리턴
// function solution(numbers) {
//     let maxNum = -100000000;
//     for(let i=0; i<=numbers.length-1; i++){
//         for(let j=0; j<=numbers.length-1; j++){
//             if(i != j && maxNum < numbers[i] * numbers[j]){
//                 maxNum = numbers[i] * numbers[j];
//             }
//         }
//     }
//     return maxNum;
// }

//리팩토링, 정렬을 이용하여 풀이한 방식
function solution(numbers) {
    let sortArray = numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
