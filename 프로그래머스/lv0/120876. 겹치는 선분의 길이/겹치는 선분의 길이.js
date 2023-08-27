function solution(lines) {
    const hashLine = new Map();
    let count = 0;
    for(let i=0; i<=lines.length-1; i++){
        for(let j=lines[i][0]; j<=lines[i][1]-1; j++){
            if(hashLine.has(j)){
                 hashLine.set(j, hashLine.get(j)+1);
            }else{
                 hashLine.set(j,0);
            }
        }
    }
    for([key, value] of hashLine){
       if(value >= 1){
           count++
       }
   }
    return count
}
