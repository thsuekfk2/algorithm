function solution(n) {
    let myMap = new Map();
    let result = ''
    n.split('').sort().map((data)=>{
        if(!myMap.has(data)){
            myMap.set(data,0)
        }else{
            myMap.set(data,myMap.get(data)+1)}
        })
        for([key,value] of myMap){
            if(value===0){
                result+=key;
            }
        }
    return result;
}