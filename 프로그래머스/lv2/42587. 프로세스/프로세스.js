function solution(priorities, location) {
    let arr = []
    let count = 0;
    //위치 배열 만들기
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }
    while(priorities.length!==0){
        let maxValue = Math.max(...priorities);
        
        if(priorities[0] < maxValue){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }else{
            count++;
            priorities.shift();
            if(arr.shift() == location)
                return count;
        }
    }
}