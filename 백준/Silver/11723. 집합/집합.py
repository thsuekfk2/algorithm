
import sys

m = int(sys.stdin.readline())
stack=[]

for i in range(m):
  temp = sys.stdin.readline().strip().split()
  
  if len(temp) == 1:
    if temp[0]=="all":
      stack = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    elif temp[0]=="empty":
      stack=[]
  else:
    a = temp[0]
    b = int(temp[1])

    if a=="add":
      if b not in stack:
        stack.append(b)
    elif a=="remove":
      if b in stack:
        stack.pop(stack.index(b))
    elif a=="check":
      if b in stack:
        print(1)
      else:
        print(0)
    elif a=="toggle":
      if b in stack:
        stack.remove(b)
      else:
        stack.append(b)


