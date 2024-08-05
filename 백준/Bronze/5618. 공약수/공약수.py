import sys

N = int(sys.stdin.readline())
arr = list(map(int,sys.stdin.readline().split()))

for i in range(1,min(arr)+1):
  ctn=0
  for j in arr:
    if j % i== 0:
      ctn+=1
    else:
      break
  if ctn==N:
    print(i)