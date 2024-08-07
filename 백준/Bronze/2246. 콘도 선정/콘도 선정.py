import sys

n = int(sys.stdin.readline())
arr = []

for i in range(n):
  d,c = map(int,sys.stdin.readline().split())
  arr.append([d,c])

arr.sort()
cost = 10001
result = 0
for i in arr:
    temp = i[1]
    if temp < cost:
        cost = temp
        result += 1
print(result)