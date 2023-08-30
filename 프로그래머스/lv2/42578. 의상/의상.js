// 코니가 동그란 안경, 긴 코드, 파란 티셔츠를 입었다면
// 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용해야한다.
//코니는 각 종류별로 최대 1가지 의상만 착용할 수 있다.
// 착용한 의상의 일부가 겹치더라고, 다른 의상이 겹치지 않거나 
// 혹은 의상을 추가로 더 착용한 경우 서로 다른 방법으로 옷을 착용한 것으로 계산
// 코니는 하루에 최소 한 개의 의상은 입는다.
// 서로 다른 옷의 조합의 수 리턴
function solution(clothes) {
    var answer = 0;
    let clothesMap = new Map();
    
    clothes.map((data)=>{
        if(clothesMap.has(data[1])){
            let array = clothesMap.get(data[1])
            array.push(data[0])
            clothesMap.set(data[1],array)
        }else{
            clothesMap.set(data[1],[data[0]])
        }
        
    })
    
    let multipleValue = 1;
    for([key,value] of clothesMap){
        multipleValue *= value.length + 1
    }

    if(clothesMap.size===1){
        return clothes.length 
    }else{
        return multipleValue -1
    }

}


