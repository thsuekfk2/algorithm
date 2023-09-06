function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++){
        if(parseInt(t.slice(i,p.length+i)) <= parseInt(p)){
            count++;
        }
    }
    return count;
}