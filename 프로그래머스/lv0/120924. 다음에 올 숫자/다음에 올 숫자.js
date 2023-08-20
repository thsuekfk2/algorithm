function solution(common) {
    let is등차수열 = common[1] - common[0] === common[2] - common[1]
    if(is등차수열){
        return common[common.length-1] + common[1] - common[0];
    }else{
        return common[common.length-1] * common[1] / common[0];
    }
}