function solution(s) {
    let stringArray = s.split(' ')
    let resultString = ""
    for(let i=0; i< stringArray.length; i++){
        for(let j=0; j<stringArray[i].length; j++){
            if(j%2===0){ //짝수일 경우
                resultString+= stringArray[i][j].toUpperCase()
            }else{ //홀수일 경우 
                resultString+= stringArray[i][j].toLowerCase()
            }   
        }
        if(i!==stringArray.length-1){
            resultString+=" "
        }
    }
    return resultString
}