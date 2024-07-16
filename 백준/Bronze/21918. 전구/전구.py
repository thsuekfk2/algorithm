n,m = map(int,input().split())
arr = list(map(int,input().split()))

for m in range(m):
  a,b,c= map(int,input().split())
  if a==1 :
    arr[b-1] = c
  elif a == 2:
    arr[b-1:c] = [1 - i for i in arr[b-1:c]]
  elif a == 3:
    arr[b-1:c] = [0 for i in arr[b-1:c]]
  else:
    arr[b-1:c] = [1 for i in arr[b-1:c]]

print(*arr)