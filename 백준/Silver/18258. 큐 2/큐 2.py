
import sys
from collections import deque

t = int(sys.stdin.readline())

arr = deque([])
for i in range(t):
  inputArr= sys.stdin.readline().split()
  if inputArr[0]=="push":
    arr.append(inputArr[1])
  elif inputArr[0]=="pop":
    if len(arr) < 1:
      print(-1)
    else:
      print(arr.popleft())
  elif inputArr[0]=="size":
    print(len(arr))
  elif inputArr[0]=="empty":
    if len(arr)==0:
      print(1)
    else:
      print(0)
  elif inputArr[0]=="front":
    if len(arr)==0:
      print(-1)
    else:
      print(arr[0])
  elif inputArr[0]=="back":
    if len(arr)==0:
      print(-1)
    else:
      print(arr[-1])