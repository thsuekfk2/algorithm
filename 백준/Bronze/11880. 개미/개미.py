import sys

T = int(sys.stdin.readline())
for t in range(T) :
    a, b, c = map(int, sys.stdin.readline().split())
    temp = max(a, b, c)
    sys.stdout.write(''.join([str((a + b + c - temp)**2 + temp**2), '\n']))