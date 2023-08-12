function solution(my_string) {
    return [...my_string].map((data)=>data.toLowerCase()).sort().join('');
}