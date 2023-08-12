function solution(array) {
    let maxValue = array.slice().sort((a,b)=> b-a)[0];
    return [maxValue, array.indexOf(maxValue)]
}