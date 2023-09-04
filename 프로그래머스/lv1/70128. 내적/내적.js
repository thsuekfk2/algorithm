function solution(a, b) {
    let result = 0;
    a.map((data,i) => {
        result += data * b[i];
    })
    return result;
}