import sys
t = int(sys.stdin.readline())

for i in range(t):
  n = int(sys.stdin.readline())
  num1 = set(map(int,input().split()))
  m = int(input())
  num2 = list(map(int,input().split()))
  for num in num2:
    if num in num1:
      print(1)
    else:
      print(0)