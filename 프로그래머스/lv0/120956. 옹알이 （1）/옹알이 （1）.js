// 순열 구하기
const getPermutations = (result, arr, count) => {
  const permute = (current, remaining) => {
    if (current.length === count) {
      result.push(current.join(''));
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current.concat(remaining[i]);
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute(newCurrent, newRemaining);
    }
  }
  permute([], arr);
}

function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"]
    let count = 0;
    
    const result = []
    getPermutations(result, word,1)
    getPermutations(result, word,2)
    getPermutations(result, word,3)
    getPermutations(result, word,4)

     babbling.forEach((data)=>{
         if(result.includes(data)){
             count++;
         }
     })
    return count;
}