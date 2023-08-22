function solution(num, total) {
    let middle = total / num; 
    let start = (num-1) / 2; 
    let result = [];
    for(let i=middle-start; i<=middle+start; i++){
        result.push(i);
    }
    return result;
}