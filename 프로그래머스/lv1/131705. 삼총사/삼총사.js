
const getCombinations=(arr, count)=> {
  const combinations = [];

  function combine(current, start) {
    if (current.length === count) {
      combinations.push(current.slice()); // 배열을 복사하여 추가
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(current, i + 1);
      current.pop(); // 다음 경우를 위해 원소 제거
    }
  }

  combine([], 0);
  return combinations;
}

function solution(number) {
    let count = 0;
    const combinations = getCombinations(number,3);
    combinations.map((data)=>{
        if(data.reduce((a,c)=>a+c,0)===0){
            count++;
        }
    })
    return count
}
