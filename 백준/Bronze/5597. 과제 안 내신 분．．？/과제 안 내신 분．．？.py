initList = [i+1 for i in range(30)]
list = [int(input()) for i in range(28)]
for i in list:
  initList.pop(initList.index(i))

print(initList[0])
print(initList[1])