
import sys
t = int(sys.stdin.readline())
arr = [0,0,0]

for i in range(t):
  h,m,s = map(int,sys.stdin.readline().strip().split())
  totalS = 3600 * h + 60 * m + s

  angleH = h * 30 + m * 0.5 + s* (0.5/60)
  angleM = m * 6 + s * 0.1
  angleS = s * 6

  angles = [angleH, angleM, angleS]
  min_angle = 360

  for i in range(len(angles)):
    for j in range(i + 1, len(angles)):
      diff = abs(angles[i] - angles[j])
      min_angle = min(min_angle, min(diff, 360 - diff))
  
  print(f"{min_angle:.6f}")