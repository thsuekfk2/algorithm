function getCombination(number,num) {
    let result = new Set();
    const combination = (current, start) => {
        if (current.length === num) {
            const sum = current.slice().reduce((a,c)=>a+c)
            result.add(sum);
            return;
        }
        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return [...result];
}

function solution(numbers) {
    const result = getCombination(numbers,2)
    return result.sort((a,b) => a - b );
}