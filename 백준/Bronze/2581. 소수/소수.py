
m = int(input())
n = int(input())
list =[]

def isPrime(num):
  if num == 1 :
    return False
  for i in range(2, num):
    if num % i == 0:
      return False
  return True

for i in range(m, n+1):
  if isPrime(i):
    list.append(i)

if list:
  print(sum(list))
  print(list[0])
else:
  print(-1)