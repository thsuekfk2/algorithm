function solution(numbers) {
    const numbersLength = numbers.length - 1;
    
    const sortArray = numbers.sort((a,b)=>a-b);
    
    return parseInt(sortArray[numbersLength] * sortArray[numbersLength-1])
}