function solution(n) {
    // n을 2로 나눔 number = 2로 지정
    // 2로 나누어 떨어지면 result = []에 2를 넣음
    // 나머지가 2로 나누어 떨어지면 나누어 떨어지지 않을 때 까지 나눔
    // 나누어 떨어지지 않으면 number에 1증가 시켜 3으로 지정
    // 반복 후 만약 나머지가 1일 경우 멈춤
    let number = 2;
    let result = [];
    while(n !== 1){
        if(n % number === 0){
            result.push(number )
            while(n % number === 0){
                n = n / number;
            }
        }
        number++;
    }
    return result;
}