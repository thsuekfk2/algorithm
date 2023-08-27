// 홍박사님은 총 n마리의 포켓몬 중에서 n/2 마리를 가져가도 좋다고 했다. 
// 포켓몬의 종류에 따라 번호를 붙여 구분
// 같은 종류의 포켓몬은 같은 종류를 가짐
// 총 4마리의 포켓몬, [3,1,2,3] 의 종류가 있을 경우 2마리를 고르르 방법의 종류의 최댓값은 2
// 다양한 포켓몬을 가지길 위하기 때문에 최대한 많은 포켓몬을 포함하여 n/2마리를 선택하려고 한다.
// n/2 마리의 포켓몬을 선택하는 방법 중, 가장 많은 종류의 포켓몬을 선택하는 방법을 찾아 포켓몬 종류 번호의 개수를 리턴하도록
function solution(nums) {
    //중복을 제거하기
    const newNumsArray = new Set();
    const pickNum = parseInt(nums.length/2)
    nums.forEach((data)=>{
        newNumsArray.add(data)
    })
    return pickNum > [...newNumsArray].length ?  [...newNumsArray].length : pickNum;
}