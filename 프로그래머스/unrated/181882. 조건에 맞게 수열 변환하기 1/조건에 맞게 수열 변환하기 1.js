function solution(arr) {
    return arr.map((data)=> {if(data>=50 && data % 2 === 0) {
        return parseInt(data / 2)
        }else if(data<50 && data % 2 !== 0) {
            return parseInt(data * 2)
        }else return data
    })
}
                   