//빈 콜라 병 2개 -> 콜라 한병을 줌
//빈 병 a를 가져다 주면 b병의 콜라를 주는 마트가 있을 때, 
//빈 병 n개를 가져가면 몇병을 받을 수 있는지
function solution(a, b, n) {
    let count=0;
    while(n >= a){
        count += Math.floor(n/a)*b
        n = Math.floor(n/a)*b + n%a
    }
    return count;   
}