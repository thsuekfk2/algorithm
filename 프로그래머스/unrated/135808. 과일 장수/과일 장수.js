//사과 상태에 따라 점수가 결정
//한 상자에 사과를 m개씩 담고 포장 
//담긴 사과 중 가장 낮은 점수 p, 한 상자의 가격은 p * m
//k 점이 최상품의 사과, 1점이 최하품의 사과
//(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수)
function solution(k, m, score) {
    //k : 최상의 사과
    //m : 한 상자에 사과를 담는 갯구
    //score: 점수가 담겨있는 배열
    
    //나올 수 있는 상자의 갯수
    let returnCount = score.length / m;
    
    //배열을 정렬
    score.sort((a,b)=>b-a)
    
    //배열을 앞에서 m개씩 자르고 자른 배열을 tmp에 저장
    let tmp = [];
    for(let i =0; i<score.length; i+=m){
        if(score.slice(i,i+m).length == m){
            tmp.push(score.slice(i,i+m))
        }
    }
    
    //배열을 돌면서 최솟값 * 한 상자의 사과의 갯수를 더한다.
    let answer = 0;
    tmp.map((data)=>{
        answer += Math.min(...data) * m;
    })
    return answer;
}