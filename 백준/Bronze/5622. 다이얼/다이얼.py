input = input()
arr=['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
result = 0

for i in input:
  for j in arr:
    if i in j:
      result += arr.index(j)+3
print(result)