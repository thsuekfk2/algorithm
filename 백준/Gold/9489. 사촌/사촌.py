
import sys
from collections import defaultdict

while True:
  n,num = map(int,sys.stdin.readline().split())

  if n==0 & num == 0:
    break

  arr = list(map(int,sys.stdin.readline().split()))
  tree = defaultdict(int)

  depth = 0
  for i in range(1,n):
    tree[arr[i]] = arr[depth]
    if i==n-1 or arr[i]+1 != arr[i+1]:
      depth+=1

  count=0
  if tree[tree[num]]:
    for node in arr:
      #부모 노드가 다르면서 부모의 부모노드가 같으면
      if tree[tree[num]] == tree[tree[node]] and tree[num] != tree[node] : 
        count+=1
  print(count)