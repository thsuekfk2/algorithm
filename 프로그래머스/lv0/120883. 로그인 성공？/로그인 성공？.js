function solution(id_pw, db) {
    let message = "";
    for(const data of db){
        if(data[0] === id_pw[0]){
            if(data[1] === id_pw[1]){
                message= "login"
            }else{
                message= "wrong pw";
            }
        }
    }
    if(message===""){
        return "fail";
    }
    return message
}