
import sys
input = sys.stdin.readline

n, w = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(n - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

leaf_count = 0
for i in range(2, n + 1):
    if len(graph[i]) == 1:  
        leaf_count += 1

result = w / leaf_count
print(round(result, 10))
