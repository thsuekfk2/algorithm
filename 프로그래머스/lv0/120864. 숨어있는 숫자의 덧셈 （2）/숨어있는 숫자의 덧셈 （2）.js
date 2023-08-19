//my_string은 소문자, 대문자, 자연수로 구성
//자연수의 합을 리턴
function solution(my_string) {
    let result = 0;
    let replaceArray = my_string.replace(/[a-z]|[A-Z]/g,"_").split("_");
    replaceArray.map((data)=>{
        if(data!=="") {
            result+=parseInt(data);
        }
    })
    return result;
}