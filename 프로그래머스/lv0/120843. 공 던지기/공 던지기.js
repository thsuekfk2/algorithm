function solution(numbers, k) {
    let numbersLength = numbers.length;
    // [1, 2, 3, 4], 길이 4
    //k = 1 , 인덱스 0
    //k = 2,  인덱스 2
    //k = 3,  인덱스 0
    
    //[1, 2, 3], 길이 3
    //k = 1, 인덱스 0
    //k = 2, 인덱스 2
    //k = 3, 인덱스 1
    
    return numbers[(k-1)*2 % numbersLength]
}