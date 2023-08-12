//문자열 my_string 안에 있는 숫자만 골라 오름차순 정렬 리스트 리턴
function solution(my_string) {
    let numArray = my_string.replace(/[a-z]/g,"");
    return [...numArray].map((data)=> parseInt(data)).sort((a,b)=> a - b);
}