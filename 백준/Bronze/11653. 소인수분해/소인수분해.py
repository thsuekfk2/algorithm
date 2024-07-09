
input = int(input())
count = 2

while input > 1:
  if input % count == 0:
    input = input // count
    print(count)
  else:
    count += 1