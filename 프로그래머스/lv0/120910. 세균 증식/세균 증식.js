function solution(n, t) {
    var answer = n;
    let count = 0;
    while(count < t){
        answer *= 2;
        count++;
    }
    return answer;
}