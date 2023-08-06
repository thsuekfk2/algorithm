function solution(n) {
    return String(n).split("").reduce((a,c)=>parseInt(a)+parseInt(c),0)
}