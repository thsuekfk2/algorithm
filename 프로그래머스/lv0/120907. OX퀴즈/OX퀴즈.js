function solution(quiz) {
    let answer = [];
    let result = [];
    quiz.map((data)=>{
       answer.push(data.split('='));
    })
    answer.map((data)=>{
        if(parseInt(eval(data[0]))===parseInt(data[1])){
            result.push("O");
        }else{
            result.push("X");
        }
    })
    return result
}