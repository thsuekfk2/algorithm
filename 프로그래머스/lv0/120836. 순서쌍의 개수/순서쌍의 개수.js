function solution(n) {
    //약수의 갯수 구하기
    let count = 0;
    for(let i = 0; i<= n/2 ; i++){
        if( n % i === 0) {
            count++;
        }
    }
    //n 자기 자신도 포함
    return count + 1;
}