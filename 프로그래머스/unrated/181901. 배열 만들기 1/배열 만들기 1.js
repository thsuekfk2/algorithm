function solution(n, k) {
    let result = [];
    let count = 1;
    while(k * count <= n){
        result.push(k * count)
        count++;
    }
    return result;
}