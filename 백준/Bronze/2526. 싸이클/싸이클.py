
N,P = map(int,input().split())
list = []
result = N
while True:
  result=(result*N)%P
  if list.count(result) != 0:
    print(len(list) - list.index(result))
    break
  list.append(result)