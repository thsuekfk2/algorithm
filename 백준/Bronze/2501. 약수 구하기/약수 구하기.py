a,b = map(int,input().split())
list = []
count = 1

while count<=a:
  if a % count == 0:
    list.append(count)
    count += 1
  else:
    count += 1

if len(list)>=b:
  print(list[b-1])
else:
  print(0)