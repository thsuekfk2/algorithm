num = input()
result =""
index = len(num)

for i in range(1,len(num)+1):
  result+=num[index-1]
  if i % 3 == 0 and i != len(num):
    result+=","
  index-=1
  
print(result[::-1])