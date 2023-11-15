function 소수인지판별(sum){
    for(let i=2; i<= Math.sqrt(sum); i++){
        if(sum % i ===0){
            return true;
        }
    }
    return false;
}

function solution(nums) {
    let answer = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k];
                
                //소수 판별
                if(sum!==1 && !소수인지판별(sum)){
                    answer++;
                    console.log(sum)
                }
            }
        }
    }
    return answer;
}