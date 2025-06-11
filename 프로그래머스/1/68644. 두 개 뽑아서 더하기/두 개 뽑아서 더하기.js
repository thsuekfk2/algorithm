function solution(numbers) {
    let arr = [...numbers];
    let newArr = []
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            newArr.push(arr[i]+arr[j])
        }
    }
    return [...new Set(newArr)].sort((a,b)=>a-b);
}