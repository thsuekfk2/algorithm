S = input().upper()
setList = list(set(S))

countArr=[]

for i in setList:
  countArr.append(S.count(i))


if countArr.count(max(countArr))>1:
  print("?")
else:
  print(setList[countArr.index(max(countArr))])
