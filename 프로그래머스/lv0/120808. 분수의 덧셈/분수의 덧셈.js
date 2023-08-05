function solution(numer1, denom1, numer2, denom2) {
    //유클리드 호제법
    const 최대공약수구하기 = (a,b)=>{
        if(b===0){
            return a;
        }
        return 최대공약수구하기(b,a%b);
        
    }
    const 분모 = denom1 * denom2;
    const 분자 = denom1*numer2 + numer1*denom2;
    const 최대공약수 =  최대공약수구하기(분모,분자);
    
    return [분자/최대공약수,분모/최대공약수]
}