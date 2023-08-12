// 정수 배열 num_list
// 정수 매개변수 n
// 정수배열 num_list를 n차원 배열로 바꿔 리턴
function solution(num_list, n) {
    // let answer = [];
    // let nArray = [];
    // num_list.forEach((data,i)=> {
    //     if((i+1) % n !== 0){
    //         nArray.push(data);
    //     }else{
    //         nArray.push(data);
    //         answer.push(nArray)
    //         nArray = [];
    //     }
    // })
    // return answer;
    
    //리팩토링
    let answer = [];
    while(num_list.length){
        answer.push(num_list.splice(0,n))
    }
    return answer
}