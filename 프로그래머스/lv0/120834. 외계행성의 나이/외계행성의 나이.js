function solution(age) {
    let answer = "";
    let stringAge = String(age);
    // 0의 아스키코드 -> 48
    // a의 아스키코드 -> 97
    for(let i=0; i<stringAge.length; i++){
        let asciiCodeAge = stringAge.charCodeAt(i) + 49;
        let AgeToChar = String.fromCharCode(asciiCodeAge);
        answer += AgeToChar;
    }
    return answer;
}