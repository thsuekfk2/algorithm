
import sys
from collections import deque

n = int(sys.stdin.readline())
arr = deque(list(sys.stdin.readline().strip()))
numArr = deque([])

stack = []

for i in range(n):
  numArr.append(int(sys.stdin.readline()))

while len(arr) > 0:
  popValue = arr.popleft()
  if popValue.isalpha():
    index = ord(popValue) - ord('A')
    stack.append(numArr[index])
  else:
    operand2 = stack.pop()
    operand1 = stack.pop()
    if popValue == '+':
        result = operand1 + operand2
    elif popValue == '-':
        result = operand1 - operand2
    elif popValue == '*':
        result = operand1 * operand2
    elif popValue == '/':
        result = operand1 / operand2
    stack.append(result)

print(f"{stack[0]:.2f}")