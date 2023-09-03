function solution(n) {
    let result = "";
    let count = n;
    while(count!=-0){
        if(result[result.length-1]=="수"){
            result += "박"
        }else{
            result += "수"
        }
        count--;
    }
    return result;
}