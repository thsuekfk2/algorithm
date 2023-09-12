function solution(a, b) {
    let type1 =  +(a.toString() + b.toString());
    let type2 = +(b.toString() + a.toString())
    return Math.max(type1, type2);
}