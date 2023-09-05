function solution(d, budget) {
    let count = 0;
    d.sort((a, b) => a - b);
    
    for(let i=0; i<d.length; i++){
        budget -= d[i]
        if(budget < 0){
            break;
        }
        count++;
    }
    return count;
}