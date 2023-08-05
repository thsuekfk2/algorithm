function solution(array) {
    //Map 객체를 사용하여 문제 풀이
    const mapObject = new Map();
    
    if(array.length === 1){
        return array[0];
    }
    
    //키가 존재하는지 확인, 존재하지 않으면 0을 넣어줌, 존재할 경우 기존 값에 +1
    array.forEach((data,i)=>{
        if(!mapObject.has(data)) {
            mapObject.set(data , 0);
        } 
        mapObject.set(data,mapObject.get(data)+1);
    })
    
    let maxValue = -1;
    let maxKey = -1;
    
    // Map 객체의 값들을 반복하여 최대값, 최대값 키 찾기
    for (const [key, value] of mapObject) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    // 최빈값이 여러 개 인지 확인
    let maxKeyCount = 0;
    for (const [key, value] of mapObject) {
        if(maxValue===value){
            maxKeyCount++;
        }
    }
    
    return maxKeyCount > 1 ? -1 : maxKey;
}

