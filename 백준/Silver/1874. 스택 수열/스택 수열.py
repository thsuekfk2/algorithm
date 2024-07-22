
import sys
from collections import deque

count = 1
stack = []
result = []

N = int(sys.stdin.readline())
for i in range(N):
    num = int(sys.stdin.readline())
    # num이하 숫자까지 스택에 넣기
    while count <= num:
        stack.append(count)
        result.append('+')
        count += 1
    # num이랑 스택 맨 위 숫자가 동일하다면 제거
    if stack[-1] == num:
        stack.pop()
        result.append('-')

if len(stack)>0:
  print("NO")
else:
  print('\n'.join(result))