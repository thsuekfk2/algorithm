// 모스부호를 해독하는 프로그램
// 문자열의 letter, letter의 영어 소문자로 바꾼 문자열 리턴
// 모스부호는 공백으로 나누어져 있고, 연속으로 두 개 이상 존재 하지 않음
function solution(letter) {
    let answer = '';
    let letterArray = letter.split(' ');
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    letterArray.forEach((data,i) => {
            answer += morse[data];
    })

    return answer;
}