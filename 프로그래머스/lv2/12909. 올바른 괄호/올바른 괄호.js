function solution(s){
    let stack = [];
    
    for(data of [...s]){
        if(data==="("){
            stack.push("(");
        }else{
            if(stack.length <= 0){
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0 ? true : false;
}
