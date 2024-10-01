import sys

while True:
    start = sys.stdin.readline()
    if not start:
        break
    s,t = start.split()
    s_index=0
    for t_word in t:
        if t_word == s[s_index]:
            s_index+=1
            if s_index == len(s):
                break
    if(s_index == len(s)):
        print("Yes")
    else:
        print("No")