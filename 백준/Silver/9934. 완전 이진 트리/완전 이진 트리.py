
import sys

k = int(sys.stdin.readline())
inorder = list(map(int,sys.stdin.readline().split()))
tree = [[]for i in range(k)]

def dfs(arr,count):
    mid = int(len(arr))//2
    tree[count].append(arr[mid])
    if len(arr)==1:
        return
    dfs(arr[:mid],count+1)
    dfs(arr[mid+1:],count+1)

dfs(inorder,0)

for j in tree:
    print(*j)