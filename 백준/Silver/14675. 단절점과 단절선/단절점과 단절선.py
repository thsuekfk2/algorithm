
import sys

n = int(sys.stdin.readline())
tree = [[] for i in range(n+1)]

for i in range(n-1):
  a,b= map(int,sys.stdin.readline().split())
  tree[a].append(b)
  tree[b].append(a)

m = int(sys.stdin.readline())
for i in range(m):
  t,k= map(int,sys.stdin.readline().split())
  if t==1:
    if len(tree[k]) < 2:
      print("no")
    else:
      print("yes")
  else:
    print("yes")