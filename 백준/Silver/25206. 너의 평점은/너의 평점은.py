
credit = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0]
grade = ["A+","A0",'B+','B0','C+','C0','D+','D0', 'F']
creditSum = 0
total = 0

for i in range(20):
  a,b,c = input().split()
  if c == "P":
    continue
  total += float(b) * float(credit[grade.index(c)])
  creditSum += float(b)

print(round(total/creditSum,6))