function getCombination(number,num) {
    let result = [];

    const combination = (current, start) => {
        if (current.length === num) {
			result.push(current.slice());
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}

function solution(number) {
    let count = 0;
    const combinations = getCombination(number,3);
    combinations.map((data)=>{
        if(data.reduce((a,c)=>a+c,0)===0){
            count++;
        }
    })
    return count
}
