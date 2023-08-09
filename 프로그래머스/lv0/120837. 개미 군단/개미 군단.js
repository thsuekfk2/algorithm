//개미 군단은 체력의 맞는 병력을 데리고 가려함
// 장군 개미 공격력 5, 병정 개미 공경력 3, 일개미 공격력 1
// 23의 여치 => 일개미 23 || 4마리의 장군(20) + 병정 1마리(3)
// 최소한의 병력을 구성
function solution(hp) {
    let count = 0;
    while(hp >= 5){
        hp -= 5;
        count += 1;
    }
    while(hp >= 3){
        hp -= 3;
        count += 1;
    }
    return count + hp
}