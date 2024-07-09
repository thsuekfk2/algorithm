while True:
  n = int(input())
  if n==-1:
    break
  list =[]
  for i in range(1,n):
    if n%i==0:
      list.append(i)
  sum= 0
  for i in list:
    sum+=i
  if sum == n :
    print(n,"="," + ".join(map(str,list)),end="\n")
  else:
    print(n,"is NOT perfect.",end="\n")
  list=[]