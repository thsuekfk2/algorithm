//다트 게임은 총 3번의 기회
//s(1제곱),d(2제곱),t(3제곱) 
//스타상 -> 해당 점수와 버로 전의 얻은 점수를 각 2배로
//아차상 -> 해당 점수는 마이너스
//스타상이 첫번째일 경우 첫번째 점수만 2배
//스타상이 중첩될 경우 점수는 4배
//스타상과 아차상이 중첩될 경우 -2배

function solution(dartResult) {
    let num = 0;
    let numArray = [];
    let result =0;
    for(let i=0; i<dartResult.length; i++){
        if(dartResult[i] >= 0 && dartResult[i] <= 9 ) { //숫자일 경우
            if( dartResult[i] == 1 && dartResult[i+1] == 0 ) {
                // 10일 경우 10으로 만들어주고 0을 건너뛰기 위해 i++ 해줌.
                num = 10;
                i++;
            } else { // 0이 아닐 경우 그대로 temp에 넣어줌.
                num = dartResult[i];
            }
        }
            
        if(dartResult[i]==="S"){
            numArray.push(num);
        }else if(dartResult[i]==="D"){
            num = num ** 2
            numArray.push(num);
        }else if(dartResult[i]==="T"){
            num = num ** 3
            numArray.push(num);
        }
        
        if(dartResult[i]==="*"){
           numArray[numArray.length-1] *= 2;
            numArray[numArray.length-2] *= 2;
            
        }
        if(dartResult[i]==="#"){
           numArray[numArray.length-1] *= -1;
        }   
    
    }
    for(let i=0; i<numArray.length; i++) {
        result += Number(numArray[i]);
    }
    
    return result;
}
