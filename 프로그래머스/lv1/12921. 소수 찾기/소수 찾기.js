function isPrime(num) {
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){ 
            return false; // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        }
    } 
    return true; // 나눠진 수가 없다면 해당 수는 소수이므로 return true
}

function solution(n) {
    let count = 0;
    for(let i=2; i<=n; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}