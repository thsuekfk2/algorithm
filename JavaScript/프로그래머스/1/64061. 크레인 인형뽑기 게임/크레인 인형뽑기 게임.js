
function solution(board, moves) {
  let stack = [];
  let N = board[0].length;
  let ctn = 0;

  for (const move of moves) {
    for (let i = 0; i < N; i++) {
      if (board[i][move - 1] !== 0) {
        // 스택의 마지막 값이랑 같으면
        if (stack[stack.length - 1] === board[i][move - 1]) {
          // 스택 제거
          stack.pop();
          // 보드 제거
          board[i][move - 1] = 0;
          // 카운트 ++2
          ctn += 2;
        } else {
          stack.push(board[i][move - 1]);
          board[i][move - 1] = 0;
        }
        break;
      }
    }
  }
  console.log(ctn);
  return ctn;
}
