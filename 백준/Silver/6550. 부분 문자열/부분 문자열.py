import sys
input = sys.stdin.readline

while True:
  ss = input().rstrip()
  if not ss:
    break
  s,t= ss.split()
  ctn=0
  for j in range(len(s)):
    tt =  t.find(s[j])
    if tt!=-1:
      ctn+=1
      t=t[tt+1:]
  if len(s) == ctn:
    print("Yes")
  else:
    print("No")
