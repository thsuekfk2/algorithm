import sys

while True:
    N,M = map(int,sys.stdin.readline().split())
    if N == 0 and M == 0:
        break
    dic = {}
    for i in range(N):
        arr = list(map(int,sys.stdin.readline().split()))
        for j in range(M):
            if arr[j] in dic:
                dic[arr[j]]+=1
            else:
                dic[arr[j]]=1
    maxVal = max(dic.values())
    keys_to_delete = [key for key, val in dic.items() if maxVal == val]
    for key in keys_to_delete:
        del dic[key]
    maxVal2 = max(dic.values())
    arr = [key for key, val in dic.items() if maxVal2 == val]
    arr.sort()
    print(*arr)