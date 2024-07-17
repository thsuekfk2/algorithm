init = int(input())

money1 = init
money2 = init

arr = list(map(int, input().split()))

# 첫 번째 전략 (기본 전략)
person1 = 0
for price in arr:
    if money1 >= price:
        person1 += money1 // price
        money1 -= price * (money1 // price)
final_money1 = money1 + person1 * arr[-1]

# 두 번째 전략 (기적의 매매법)
person2 = 0
cnt = 0
dcnt = 0

for i in range(1, len(arr)):
    if arr[i-1] > arr[i]:
        cnt = 0
        dcnt += 1
    elif arr[i-1] < arr[i]:
        cnt += 1
        dcnt = 0
    else:
        cnt = 0
        dcnt = 0

    if dcnt >= 3 and money2 >= arr[i]:
        person2 += money2 // arr[i]
        money2 -= arr[i] * (money2 // arr[i])
    elif cnt >= 3 and person2 > 0:
        money2 += person2 * arr[i]
        person2 = 0

final_money2 = money2 + person2 * arr[-1]

if final_money1 > final_money2 :
    print("BNP")
elif final_money2 > final_money1:
    print("TIMING")
else:
    print("SAMESAME")