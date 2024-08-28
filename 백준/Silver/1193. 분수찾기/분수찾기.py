
import sys

x = int(sys.stdin.readline())

index=1
result=0

분자 = 1
분모 =1 

while x>1:
  result+=index
  if result>=x:
    break
  index+=1

for i in range(index):
  x-=i

if index%2==0:
  분모=index-x+1
  분자=x
else:
  분모=x
  분자=index-x+1

print(f"{분자}/{분모}")