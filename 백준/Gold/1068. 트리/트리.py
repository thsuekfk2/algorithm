import sys

N = int(sys.stdin.readline())
graph = list(map(int,sys.stdin.readline().split()))
arr = [[] for _ in range(N)]
removeNode = int(sys.stdin.readline())
ctn=0

for i in range(N):
    if graph[i] == -1:
        root = i
    else:
        arr[graph[i]].append(i)

def dfs(node):
    global ctn
    if node == removeNode:
        return
    if removeNode in arr[node]:
        arr[node].remove(removeNode)
    if len(arr[node]) == 0: 
        ctn += 1
        return
    for child in arr[node]:
        dfs(child)

if removeNode == root:
    print(0)
else:
    dfs(root)
    print(ctn) 
    