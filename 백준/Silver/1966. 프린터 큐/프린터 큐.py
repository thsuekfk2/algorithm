import sys
from collections import deque

n = int(sys.stdin.readline())

for i in range(n):
  total,how = map(int,sys.stdin.readline().split())
  arr = deque(enumerate(map(int,sys.stdin.readline().split())))
  count=1
  while True:
    idx,value = arr[0]
    maxValue = max(arr, key=lambda x: x[1])[1]
    if maxValue == value:
      if idx == how:
        print(count)
        break
      arr.popleft()
      count+=1
    else:
      arr.rotate(-1)