import sys

n = int(sys.stdin.readline())
for i in range(n):
    num1 = int(sys.stdin.readline())
    num1Array = set(list(map(int,sys.stdin.readline().split())))
    num2 = int(sys.stdin.readline())
    num2Array = list(map(int,sys.stdin.readline().split()))

    for num in num2Array:
        if num in num1Array:
            print(1)
        else:
            print(0)