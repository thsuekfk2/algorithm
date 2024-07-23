
import sys
N,M = map(int,sys.stdin.readline().split())
dict = {}
ctn = 0

for i in range(N):
  a = sys.stdin.readline().strip()
  dict[a] = i


for i in range(M):
  b = sys.stdin.readline().strip()
  if b in dict:
    ctn += 1

print(ctn)