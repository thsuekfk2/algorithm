
const 약수구하기 = (n)=>{
    let result = [];
    let count = 0;
    while(count<=n){
        if(n%count===0){
            result.push(count);
        }
        count++;
    }
    return result; 
}

function solution(a, b) {
    let result = 0;
    for(let i=a; i<=b; i++){
        //약수의 총 길이가 짝수이면 더하기
        //약수의 총 길이가 홀수이면 빼기
        if(약수구하기(i).length % 2 === 0 ){
            result += i;
        }else{
            result -= i;
        }
    }
    return result;
}