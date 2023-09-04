
function solution(s) {
    if(s.length === 4 || s.length === 6){
        for(data of s){
            if(isNaN(data)){
                return false;
            }
        }
    }else{
        return false;
    }
    return true;
}