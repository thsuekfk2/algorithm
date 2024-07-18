
import sys

t = int(sys.stdin.readline())
for i in range(t):
  s = sys.stdin.readline()
  arr = []

  for j in range(len(s)-1):
    if s[j] == "(":
      arr.append(s[j])
    else:
      if len(arr) == 0:
        print("NO")
        break
      else:
        arr.pop()
  else:
    if len(arr) != 0:
      print("NO")
    else:
      print("YES")