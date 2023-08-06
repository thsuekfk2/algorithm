//문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return
function solution(s1, s2) {
    // let count=0;
    // for(let i=0; i<=s1.length-1; i++){
    //     for(let j=0; j<=s2.length-1; j++){
    //         if(s1[i]===s2[j]){
    //             count++;
    //         }
    //     }
    // }
    // return count

    //리팩토링 버전
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}