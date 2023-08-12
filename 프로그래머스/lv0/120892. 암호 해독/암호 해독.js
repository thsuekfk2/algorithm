//암호화된 문자열 cipher
//문자열에서 code의 배수 번째 글자만 진짜 암호
//문자열 cipher 와 정수code 가 매개변수로 주어질 때 해독된 암호 문자열을 리턴
function solution(cipher, code) {
    return cipher.split('').filter((_,i)=>(i+1) % code === 0).join('');
}