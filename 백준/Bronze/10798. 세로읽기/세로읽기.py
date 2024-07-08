result = ""
sArr = []

for i in range(5) :
  sArr.append(input())

for i in range(15) :
  for j in range(5) :
    if i < len(sArr[j]) :
      result += sArr[j][i]
      
print(result)