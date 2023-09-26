function solution(n, lost, reserve) {
    //5명의 학생
    //체육복을 잃어버린 사람의 번호 [2, 4]
    //체육복을 빌려 줄 수 있는 번호 [1, 3, 5]
    lost.sort()
    reserve.sort()
    let duplicatesCount = lost.filter(x => reserve.includes(x)).length;
    let lostTmp = lost.filter(x => !reserve.includes(x));
    let reserveTmp = reserve.filter(x => !lost.includes(x));

    //잃어버린 번호 값의 +1, -1한 값이 빌려주는 번호에 포함되어 있는지
    for(let i=0; i<lostTmp.length; i++){
        for(let j=0; j<reserveTmp.length; j++){
            if(lostTmp[i]!==-1 && reserveTmp[j]!== -1 &&  (lostTmp[i]+1 === reserveTmp[j] ||lostTmp[i]-1 === reserveTmp[j])){
                lostTmp[i]=-1;
                reserveTmp[j]=-1;
            }
        }
    }
    return n - lostTmp.filter((data)=>data!==-1).length ;
}