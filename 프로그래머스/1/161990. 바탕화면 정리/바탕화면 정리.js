function solution(wallpaper) {
    let arrX = [];
    let arrY = [];
    
    for(let i=0; i<= wallpaper.length; i++){
        for(let j=0; j<= wallpaper[0].length; j++){
            if(wallpaper[i] && wallpaper[i][j]==="#"){
                arrX.push(i)
                arrY.push(j)
            }
        }
    }
    let sortX = arrX.sort((a,b)=>a-b)
    let sortY = arrY.sort((a,b)=>a-b)
    
    return [sortX[0], sortY[0], sortX[sortX.length-1]+1, sortY[sortY.length-1] +1]
}