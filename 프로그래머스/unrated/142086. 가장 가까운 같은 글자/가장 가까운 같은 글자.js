function solution(s) {
    let answer = [];
    let stack = [];
    [...s].map((data,i)=>{
        if(!stack.includes(data)){
            answer.push(-1);
            stack.push(data);
        }else{
            answer.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(data);
        }
    })
    return answer;
}