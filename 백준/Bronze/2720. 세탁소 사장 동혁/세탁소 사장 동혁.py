
N = int(input())
x1=0
x2=0
x3=0
x4=0

for i in range(N):
  x = int(input())
  while x>0:
    if x//25 > 0:
      x-=25
      x1+=1
    elif x//10 > 0:
      x-=10
      x2+=1
    elif x//5> 0:
      x-=5
      x3+=1
    elif x//1> 0:
      x-=1
      x4+=1
  print(x1,x2,x3,x4)
  x1=0
  x2=0
  x3=0
  x4=0