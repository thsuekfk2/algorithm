
import sys

t = int(sys.stdin.readline())

arr = []
for i in range(t):
  inputArr= sys.stdin.readline().split()
  if inputArr[0]=="push":
    arr.append(inputArr[1])
  elif inputArr[0]=="pop":
    if len(arr) < 1:
      print(-1)
    else:
      print(arr.pop())
  elif inputArr[0]=="size":
    print(len(arr))
  elif inputArr[0]=="empty":
    if len(arr)==0:
      print(1)
    else:
      print(0)
  elif inputArr[0]=="top":
    if len(arr)==0:
      print(-1)
    else:
      print(arr[-1])