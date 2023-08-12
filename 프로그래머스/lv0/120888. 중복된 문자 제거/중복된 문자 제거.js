function solution(my_string) {
    let mySet = new Set();
    for( n of my_string ){
        mySet.add(n) 
    }
    return [...mySet].join('')
}