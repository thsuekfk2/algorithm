const 최대공약수구하기 = (a,b)=>{
        if(b===0){
            return a;
        }
    return 최대공약수구하기(b,a%b);
}
const 최대공배수 = (a,b,최대공약수) =>{
    return a * b / 최대공약수
}
function solution(n, m) {
    let 최대공약수 = 최대공약수구하기(n,m);
    return [최대공약수,최대공배수(n,m,최대공약수)]
}