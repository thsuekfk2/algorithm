
arr = [[0 for i in range(100)] for i in range(100)]
count = 0
num = int(input())

for i in range(num):
  a, b = map(int, input().split())
  for j in range(a,a+10):
    for k in range(b,b+10):
      arr[j][k] = 1

for i in range(100):
  count += arr[i].count(1)

print(count)