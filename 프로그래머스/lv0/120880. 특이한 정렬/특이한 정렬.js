function solution(numlist, n) {
    let absArray = numlist.map((data)=> {return {"data":data , "abs":Math.abs(Math.abs(data) - n)}});
    let sortArray = absArray.sort((a,b)=>b.data - a.data).sort((a,b)=>a.abs-b.abs)
    return sortArray.map((data)=>data.data)
}