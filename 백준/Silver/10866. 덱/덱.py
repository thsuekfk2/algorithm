
import sys
from collections import deque

t = int(sys.stdin.readline())

arr = deque([])
for i in range(t):
  inputArr= sys.stdin.readline().split()
  if inputArr[0]=="push_front":
    arr.append(inputArr[1])
  if inputArr[0]=="push_back":
    arr.appendleft(inputArr[1])
  elif inputArr[0]=="pop_front":
    if len(arr) < 1:
      print(-1)
    else:
      print(arr.pop())
  elif inputArr[0]=="pop_back":
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
      print(arr[-1])
  elif inputArr[0]=="back":
    if len(arr)==0:
      print(-1)
    else:
      print(arr[0])
