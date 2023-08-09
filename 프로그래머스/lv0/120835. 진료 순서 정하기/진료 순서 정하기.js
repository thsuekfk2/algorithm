function solution(emergency) {
    let sortArray = emergency.slice().sort((a, b)=> b - a);
    return emergency.map((data,index) => sortArray.indexOf(data) + 1);
}