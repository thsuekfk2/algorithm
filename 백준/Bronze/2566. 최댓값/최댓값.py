arr = []
max = 0
x=0
y=0

for i in range(9):
  arr.append(list(map(int,input().split())))

for i in range(9):
  for j in range(9):
    if max < arr[i][j]:
      max = arr[i][j]
      x=i
      y=j

print(max)
print(x+1,y+1)