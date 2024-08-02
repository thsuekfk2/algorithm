
import sys

input= list(map(int,sys.stdin.readline().split()))
A = input[0] #피로
B = input[1] #일
C = input[2] #휴식
M = input[3] #피로최대

result = 0
피로=0

if(A>M):
  result=0
else:
  for i in range(24):
    if 피로+A > M:
      피로-=C
      if 피로 < 0:
        피로 = 0
    else:
      피로+=A
      result+=B

print(result)