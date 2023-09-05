function solution(d, budget) {
    let count = 0;
    d.sort();
    for(let i=0; i<d.length; i++){
        //예산이 남아있다면 남은 예산에서 현재 돈을 빼줌
        if(budget > d[i]){
            budget -= d[i]
        }else{
            return i;
        }
    }
}