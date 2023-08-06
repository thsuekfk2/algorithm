function solution(my_string, n) {
    let result = "";
    for(value of my_string){
        result += value.repeat(n);
    }
    return result;
}