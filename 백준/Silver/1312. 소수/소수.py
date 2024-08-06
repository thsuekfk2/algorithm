
import sys

a,b,c = map(int,sys.stdin.readline().split())
ctn = 0
result = 0

while ctn!=c:
  a = (a % b) * 10
  result = a//b
  ctn+=1

print(result)