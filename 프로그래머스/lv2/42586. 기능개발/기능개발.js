function solution(progresses, speeds) {
    let remainingDayArray = [];
    let result = [];
    let maxValue = 0;
    progresses.map((data,i)=> {
        remainingDayArray.push(Math.ceil(parseInt(100 - data) /  speeds[i]))
    })
    remainingDayArray.map((data,i)=>{
        if(maxValue < data){
            maxValue = data;
            result.push(1)
        }else{
            result[result.length-1]++;
        }
    })
    console.log(remainingDayArray)
    return result;
}