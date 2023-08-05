// 기존 코드
// return Array(n+1).fill().map((_,i)=> i%2!==0).filter((data)=>data%2!==0)

function solution(n) {
    // 더 효율적인 계산 방식으로 리팩토링
    const result = [];
    for (let i = 1; i <= n; i += 2) {
        result.push(i);
    }
    return result;
}