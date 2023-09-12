function solution(n, arr1, arr2) {
    const binaryMap1 = arr1.map(data => data.toString(2).padStart(n, '0'));
    const binaryMap2 = arr2.map(data => data.toString(2).padStart(n, '0'));

    const result = [];
    for(let i=0; i<n; i++){
        let tmp=""
        for(let j=0; j<n; j++){
            if(binaryMap1[i]?.charAt(j)==="1" ||binaryMap2[i]?.charAt(j)==="1" ){
                tmp+="#"
            }else{
                tmp+=" "
            }
            
        }result.push(tmp)
    }
    return result
}