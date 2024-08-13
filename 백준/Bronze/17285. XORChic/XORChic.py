import sys

t  = sys.stdin.readline().strip()
key = ord(t[0]) ^ ord("C")
result=""

for i in t:
  result+=chr(ord(i) ^ key)

print(result)