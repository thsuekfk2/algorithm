N = int(input())

for _ in range(N):
  x = int(input())
  denominations = [25, 10, 5, 1]
  counts = [0, 0, 0, 0]

  for i in range(4):
    while x >= denominations[i]:
      x -= denominations[i]
      counts[i] += 1

  print(*counts)
