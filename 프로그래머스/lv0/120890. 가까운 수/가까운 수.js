function solution(array, n) {
    let sortArray = array.sort();
    let subArray = sortArray.map((data)=> Math.abs(Math.abs(data) - n));
    return sortArray[subArray.indexOf(Math.min(...subArray))];
}