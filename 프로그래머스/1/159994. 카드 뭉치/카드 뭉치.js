//카드뭉치 두개에서 규칙에 맞게 카드에 적힌 단어들을 사용해서 순서의 단어 배열을 만들자
function solution(cards1, cards2, goal){
    let index1 = 0;
    let index2 = 0;
    
    goal.forEach((data,i)=>{
        if(cards1[index1] === data){
            index1 ++;
        }
        if(cards2[index2] === data){
            index2 ++;
        }
    })

    if(index1+index2 === goal.length){
        return "Yes"
    }
    return "No"
}