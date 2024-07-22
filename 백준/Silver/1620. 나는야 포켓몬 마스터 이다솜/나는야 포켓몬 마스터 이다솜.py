
import sys
from collections import deque

N,M = map(int,sys.stdin.readline().split())
dict = {}

for i in range(N):
  a = sys.stdin.readline().strip()
  dict[i] = a
  dict[a] = i+1

for i in range(M):
  q = sys.stdin.readline().strip()
  if q.isalpha():
    print(dict[q])
  else:
    print(dict[int(q)-1])