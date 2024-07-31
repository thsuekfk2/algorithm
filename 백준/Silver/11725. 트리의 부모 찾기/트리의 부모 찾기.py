
import sys
sys.setrecursionlimit(10**6)

N = int(sys.stdin.readline())
graph = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)
result = [0] * (N + 1)

for i in range(N-1):
  a,b = map(int,sys.stdin.readline().split())
  graph[a].append(b)
  graph[b].append(a)

def dfs(node):
  visited[node] = 1
  for value in graph[node]:
    if(visited[value]==0):
      result[value] = node
      dfs(value)

dfs(1)

for i in range(2,N+1):
  print(result[i])