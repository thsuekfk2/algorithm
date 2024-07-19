import sys

n, k = map(int,sys.stdin.readline().split())
arr = [i for i in range(1, int(n)+1)]
index = 0
resultArr = []

while len(arr) > 0:
   index = (index + k - 1) % len(arr)
   resultArr.append(arr.pop(index))

result = '<' + ', '.join(map(str, resultArr)) + '>'
print(result)