
n = int(input())
xList = []
yList = []

for i in range(n):
  x,y = map(int,input().split())
  xList.append(x)
  yList.append(y)

if n <= 1:
  print(0)
  exit(0)

print(int(max(xList)-min(xList))*int(max(yList)-min(yList)))