import sys
string = sys.stdin.readline()
result = ""

for i in string:
    if i.isalpha():
      if i.islower():
        result += chr((int(ord(i))-97+13)%26+97)
      else:
        result += chr((int(ord(i))-65+13)%26+65)
    else:
       result+=i

print(result)