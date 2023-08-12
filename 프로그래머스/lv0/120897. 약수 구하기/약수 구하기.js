//n의 약수를 오름차순으로 담는 배열 리턴
function solution(n) {
    var answer = [];
    let index = 1;
    while(index <= n){
        if(n % index === 0){
            answer.push(index);
        }
        index++;
    }
    return answer;
}