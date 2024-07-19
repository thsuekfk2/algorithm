import sys
from collections import deque

n = int(sys.stdin.readline())
arr = deque([i for i in range(1,n+1)])
flag = True
while len(arr) > 1:
  if flag:
    arr.popleft()
    flag = False
  else:
    arr.append(arr.popleft())
    flag = True

print(arr[0])