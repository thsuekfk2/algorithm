n = int(input())
sum=0
for i in range(1,n):
  sum = i
  for j in str(i):
    sum+= int(j)
  if sum == n:
    print(i)
    break
else:
  print(0)