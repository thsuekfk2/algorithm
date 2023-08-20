function solution(keyinput, board) {
    let x=0;
    let y=0;
    keyinput.map((data)=>{
        if(data==="left"){
            x--;
        }else if(data==="right"){
            x++;
        }else if(data==="up"){
            y++;
        }else {
            y--;
        }
        if(Math.abs(x) > board[0]/2){
            x = parseInt(x > 0 ? board[0]/2 : - board[0]/2);
        }
        if(Math.abs(y) > board[1]/2){
             y = parseInt(y > 0 ? board[1]/2 : - board[1]/2);
        }
    })
    return [parseInt(x),parseInt(y)];
}