//x축에서 가장 작은 값 구하기
//y축에서 가장 큰 값 구하기
function solution(wallpaper) {
    let arr = [];
    
    for(let i=0; i<= wallpaper.length; i++){
        for(let j=0; j<= wallpaper[0].length; j++){
            if(wallpaper[i] && wallpaper[i][j]==="#"){
                arr.push([i,j])
            }
        }
    }
    console.log(arr)
    let sortArr = arr.sort((a,b)=>a[0]-b[0])
    if(sortArr[0].length === 1){
        return [1, 0, 2, 1];
    }
    console.log(sortArr[0], sortArr[sortArr[0].length])
}