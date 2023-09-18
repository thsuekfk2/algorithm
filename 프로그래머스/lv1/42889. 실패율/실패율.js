//실패율 => 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
function solution(N, stages) {
    let map = new Map();
    //n : 총 스테이지의 갯수
    //stages : 총 도전한 사람들이 클리어 중인 스테이지를 담고 있는 배열
    let challenge = [];
    let fail = [];
    for(let i=1; i<=N; i++){
        challenge.push(stages.filter((data)=>data > i).length)
        fail.push(stages.filter((data)=> i == data).length)
    }

    //각 배열을 돌면서 실패율을 넣는다. 이때 해쉬 맵을 사용한다.
    challenge.forEach((data,i)=>{
        map.set(i+1,Number(fail[i]/data))
    })
    //실패율을 기준으로 정렬 후 인덱스를 리턴한다.
    return [...map].sort((a,b)=>b[1]-a[1]).map((data)=>data[0])
}