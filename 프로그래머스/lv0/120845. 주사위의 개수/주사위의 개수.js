//직육면체 모양의 상자에 주사위를 최대한 많이 채우고 싶다.
//상자의 가로, 세로, 높이가 저장되어있는 배열 box
//주사위 모서리의 길이 정수 n
//상자에 들어갈 수 있는 주사위의 최대 개수 리턴
function solution(box, n) {
    return parseInt(box[0]/n) * parseInt(box[1]/n) * parseInt(box[2]/n);
}