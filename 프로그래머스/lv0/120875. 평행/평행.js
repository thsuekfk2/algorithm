function solution(dots) {
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    if(Number(y3-y1)/Number(x3-x1) == Number(y4-y2)/Number(x4-x2) || 
       Number(y3-y2)/Number(x3-x2) == Number(y4-y1)/Number(x4-x1) ||
       Number(y3-y4)/Number(x3-x4) == Number(y2-y1)/Number(x2-x1)
      ){
        return 1;
    } else return 0;
}
