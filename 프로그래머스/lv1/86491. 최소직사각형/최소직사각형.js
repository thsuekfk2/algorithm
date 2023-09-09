function solution(sizes) {
    let maxX=0;
    let maxY=0;
    
    let sortArray = sizes.map(([x,y])=>
        x > y ? [x,y] : [y,x]
    )
    
    sortArray.forEach(([x,y])=>{
        if(x > maxX){
            maxX = x;
        }
        if(y>maxY){
            maxY = y;
        }
    })
    return maxX * maxY;
}