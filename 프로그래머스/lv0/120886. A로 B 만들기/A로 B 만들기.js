// before 의 순서를 바꿔서 after을 만들 수 있으면 1, 만들 수 없으면 0
function solution(before, after) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}