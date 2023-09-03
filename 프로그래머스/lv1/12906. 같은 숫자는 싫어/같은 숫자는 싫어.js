function solution(arr){
    let result = [];
    arr.map((data,i)=>{
        if(arr[i-1] !== data){
            result.push(data)
        }
    })
    return result;
   
}