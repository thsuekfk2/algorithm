// 정수가 담긴 배열 numbers 
// directrion 방향으로 한칸씩 회전 시킨 배열 리턴
function solution(numbers, direction) {
    if(direction === "right"){
        numbers.unshift(numbers[numbers.length-1]);
        numbers.pop()
    }else{
        numbers.push(numbers[0])
        numbers.shift();

    }
    return numbers
}