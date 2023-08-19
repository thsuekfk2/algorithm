function solution(my_str, n) {
    let result = [];
    let startNumber = 0;
    for(let i=0; i < Math.ceil(my_str.length/n); i++){
        result.push(my_str.slice(startNumber,startNumber+n));
        startNumber+=n;
    }
    return result;
}
