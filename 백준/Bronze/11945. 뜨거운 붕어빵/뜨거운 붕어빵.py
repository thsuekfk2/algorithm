import sys

tmp = []
n, m = map(int, sys.stdin.readline().split())
for i in range(n):
    str = sys.stdin.readline().strip()
    tmp.append(str)

for i in range(n):
    for j in range(m):
        print(tmp[i][m-j-1],end="")
    print("")
