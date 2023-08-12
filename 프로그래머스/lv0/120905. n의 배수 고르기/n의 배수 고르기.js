function solution(n, numlist) {
    return numlist.filter((data)=> data % n === 0);
}