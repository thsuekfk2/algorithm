//i부터 j까지 k가 몇번 등장하는지 리턴
function solution(i, j, k) {
    let string = "";
    for(let k=i; k<=j; k++){
        string += k;
    }
    return string.split(k).length - 1;
}