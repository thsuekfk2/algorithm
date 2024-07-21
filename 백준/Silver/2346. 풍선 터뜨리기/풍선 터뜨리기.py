
import sys
from collections import deque

n = int(sys.stdin.readline())
deq = deque(enumerate(map(int,sys.stdin.readline().split())))
result = []

for i in range(n):
    idx, value = deq.popleft()
    result.append(idx+1)
    if value > 0:
        deq.rotate(-(value-1))
    else:
        deq.rotate(-value)


print(' '.join(map(str,result)))