// 시간 초과 코드
// function solution(players, callings) {
//     //불린 선수의 인덱스를 찾아 그 인덱스 앞에 선수와 바꾼다. 
//     callings.forEach((data)=> {
//         let playerIndex = players.indexOf(data);
//         let tmp;
//         tmp = players[playerIndex-1]
//         players[playerIndex-1] = players[playerIndex];
//         players[playerIndex] = tmp;
//     })
//     return players;
// }

//hash 자료구조를 이용해서 풀이하는 방법
//object의 key로 접근할 때 bigO는 O(1)이다.
function solution(players, callings) {
    let hash = new Map();

    players.forEach((data, index) => {
        hash.set(data, index);
    })

    //불린 선수의 인덱스를 찾아 그 인덱스 앞에 선수와 바꾼다. 
    callings.forEach((data)=> {
        const 불린선수Index = hash.get(data);
        const 앞에선수 = players[불린선수Index - 1];

        //swap
        [players[불린선수Index], players[불린선수Index -1]] = [players[불린선수Index -1], players[불린선수Index]];
        
        //hash도 동일하게 바꿔줌
        hash.set(data, hash.get(data) - 1);
        hash.set(앞에선수, hash.get(data) + 1);
    })
    return players;
}