//대문자는 소문자로
//소문자는 대문자로
function solution(my_string) {
    let result = [];
    [...my_string].forEach((data,i)=>{
       if(data === data.toUpperCase()){
           //대문자 이면
            result.push(data.toLowerCase())
       }else{
           //소문자 이면
            result.push(data.toUpperCase())
       }
    })
    return result.join('');
}