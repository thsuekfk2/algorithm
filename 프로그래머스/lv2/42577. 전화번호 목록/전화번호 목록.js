// 한 번호가 다른 번호의 접두어 인 경우가 있는지 확인
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book
// 어떤 번호가 달느 번호의 접두어인 경우 false, 그렇지 않으면 true

// 시간 초과
// function solution(phone_book) {
//     for(let i=0; i<=phone_book.length-1; i++){
//         let 접두어 = phone_book[i];
//         for(let j=0; j<=phone_book.length-1; j++){
//             if(i!==j && phone_book[j].indexOf(접두어) === 0){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

//리팩토링
function solution(phone_book) {
    return !phone_book.sort().some((data,i)=> phone_book[i+1]?.indexOf(data) === 0)
}