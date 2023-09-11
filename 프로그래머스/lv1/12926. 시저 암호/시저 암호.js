function solution(s, n) {
    let result = "";
    [...s].map((data)=>{
        let code = data.charCodeAt(0)
        if(data!==" "){
            if(97 <= code && code <= 122){
                result+= String.fromCharCode((code+n - 97) % 26+ 97)
                return;
            }
            if(65 <= code && code <= 90){
                result+=  String.fromCharCode((code+n - 65) % 26 + 65)
                return;
            }
            result += String.fromCharCode(code +tmp+ n);
        }else{
            result += " "
        }
    })
    return result;
}