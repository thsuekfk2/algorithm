
function solution(board) {
    let boomArray =[
        [-1,1],
        [0,1],
        [1,1],
        [-1,0],
        [0,0],
        [1,0],
        [-1,-1],
        [0,-1],
        [1,-1]
    ];
    
    let result = new Set()
    for(let x=0; x<board.length; x++){
        for(let y=0; y<board[x].length; y++){
            if(board[x][y]===1){
                boomArray.forEach((data)=>{
                   let [XX, YY] = data;
                    [XX, YY] = [x + XX, y + YY];
                    if(XX >= 0 &&
                       XX < board.length &&
                       YY >= 0 &&
                       YY < board[x].length ){
                       result.add(XX+" "+YY)
                    }
                })
            }
        }
    }
    return (board.length *board.length) - result.size;

}