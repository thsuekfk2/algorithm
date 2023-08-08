function solution(my_string) {
    let sum=0;
    [...my_string].map((data)=> {
        //isNaN 숫자면 false
        if(!isNaN(data)){
            sum += parseInt(data);
        }
    })
    return sum;
}