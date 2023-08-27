// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
// 완주한 선수들의 이름이 담긴 배열 completion
// 완주하지 못한 선수의 이름을 리턴
function solution(participant, completion) {
    const participantSortArray = participant.sort();
    const completionSortArray = completion.sort();
    let failure = "";
    
    for (let i = 0; i < participantSortArray.length; i++) {
        if (participantSortArray[i] !== completionSortArray[i]) {
            failure = participantSortArray[i];
            break;
        }
    }
    return failure;
}