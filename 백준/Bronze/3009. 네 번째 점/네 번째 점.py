
xList = []
yList = []

result = [0,0]
for i in range(3):
  x,y = map(int,input().split())
  xList.append(x)
  yList.append(y)

for j in xList:
  if xList.count(j) == 1:
    result[0] = j

for j in yList:
  if yList.count(j) == 1:
    result[1] = j

print(*result)