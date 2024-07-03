N, M = map(int, input().split())
arr = [i for i in range(1,N+1)]
#n은 바구니의 갯수
#m번 바구니를 역순으로 바꿀것이다.
for i in range(M):
  a,b = map(int, input().split())
  temp = arr[a-1:b]
  temp.reverse()
  arr[a-1:b] = temp 

print(*arr)