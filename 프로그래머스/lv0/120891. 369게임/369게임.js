// 3,6,9가 들어가는 숫자 대신 3,6,9 개수만큼 박수를 치는 게임
function solution(order) {
    return order.toString().split('').filter((data)=> data === "3" || data=== "6" || data === "9").length;
}