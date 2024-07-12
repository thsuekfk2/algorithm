

n = int(input())

s = ''
while n>=1:
  s += str(n%2)
  n//=2

print(int(s,2))