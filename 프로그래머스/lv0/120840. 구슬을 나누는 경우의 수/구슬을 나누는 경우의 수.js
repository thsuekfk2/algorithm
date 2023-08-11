const factorial = (n) => {
    if(n < 1){
        return 1
    }
    return n * factorial(n-1) ;    
}

function solution(balls, share) {
    // 머쓱이가 가지고 있는 구슬의 개수 : balls
    // 친구들에게 나눠 줄 구술의 개수 : share
    // balls개의 구슬 중 share 개의 구슬을 고르는 가능한의 모든 경우
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}