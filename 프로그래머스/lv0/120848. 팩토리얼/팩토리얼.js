const 팩토리얼 = (num) =>{
    if(num <= 1){
        return 1;
    }
    return num * 팩토리얼(num-1);
}
// 정수 n이 주어질 때, 조건을 만족하는 가장 큰 정수를 리턴
function solution(n) {
    let index = 0;
    let result = 0;
    while(n >= 팩토리얼(index)){
        index++;
    }
   return index-1;
}