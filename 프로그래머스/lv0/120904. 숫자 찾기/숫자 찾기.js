function solution(num, k) {
    let findIndex = num.toString().indexOf(k);
    return findIndex === -1 ? -1 : findIndex + 1;
}