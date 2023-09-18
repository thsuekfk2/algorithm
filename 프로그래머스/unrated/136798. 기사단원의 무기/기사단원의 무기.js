// 시간초과 코드
// function 약수의갯수구하기(num){
//     let count=0;
//     for(let j=1; j<=num; j++){
//         if(num%j===0){
//             count++
//         }
//     }
//     return count;
// }

// function solution(number, limit, power) {
//     //1부터 number 까지의 약수가 답긴 배열을 구한다.
//     let resultCount = 0;
//     for(let i=1; i<=number; i++){
//         const 약수의갯수 = 약수의갯수구하기(i);
//         //공격력의 제한수치가 넘는 값을 찾아 limit로 바꾼다.
//         if(약수의갯수>limit){
//             resultCount+=power
//         }else{
//             resultCount+=약수의갯수
//         }
//     }
//     //약수가 담긴 배열의 모든 합을 리턴한다.
//     return resultCount
// }

function 약수의갯수구하기(num){
    let count=0;
    for ( let j=1; j <=Math.sqrt(num) ; j++) {
        if (num % j === 0) {
            if(j**2===num){
                count += 1
            }else{
                count += 2;
            }
        }
    }
    return count;
}

function solution(number, limit, power) {
    //1부터 number 까지의 약수가 답긴 배열을 구한다.
    let resultCount = 0;
    for(let i=1; i<=number; i++){
        const 약수의갯수 = 약수의갯수구하기(i);
        //공격력의 제한수치가 넘는 값을 찾아 limit로 바꾼다.
        if(약수의갯수>limit){
            resultCount+=power
        }else{
            resultCount+=약수의갯수
        }
    }
    //약수가 담긴 배열의 모든 합을 리턴한다.
    return resultCount
}