import sys

arr = [-1 for i in range(11)]
countArray = [0 for i in range(11)]

n = int(sys.stdin.readline())
for i in range(n):
  a,b = map(int,sys.stdin.readline().split())
  if arr[a] == -1 :
    arr[a]=b
  elif arr[a] != b:
    arr[a]=b
    countArray[a]+=1

print(sum(countArray))