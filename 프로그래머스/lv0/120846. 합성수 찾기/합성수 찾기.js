// 합성수 : 약수의 개수가 세 개 이상한 수
// n 이하의 합성수의 개수를 리턴

//약수 인지 아닌지 리턴하는 함수
const 약수인지아닌지 = (num) =>{
    let index = 1;
    let count = 0;
    while(index <= num){
        if(num % index === 0){
            count+=1;
        }
        index += 1;
    }
    return count < 3 ? true : false;
}

function solution(n) {
    let 합성수의개수 = 0; 
    for(let i=1; i<=n; i++){
        if(!약수인지아닌지(i)){
            합성수의개수 ++;
        } 
    }
    return 합성수의개수;
}