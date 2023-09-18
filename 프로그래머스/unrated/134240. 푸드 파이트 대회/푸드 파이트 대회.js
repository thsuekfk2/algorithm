// 준비한 음식들을 일렬로 배치
// 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 먹는 방식으로 진행
//중앙에 뭉르 배치하고, 물을 먼저 먹는 선수가 승리
function solution(food) {
    let result = "";
    food.forEach((data,i)=>{
        result += (i).toString().repeat(parseInt(data/2));
    })
    
    let reverseString = result.split('').reverse().join('');
    
    result += "0"
    result += reverseString;
    
    return result;
}