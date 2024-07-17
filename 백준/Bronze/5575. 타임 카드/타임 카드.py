for i in range(3):
  sh,sm,ss,eh,em,es = map(int,input().split())
  t1 = sh*60*60 + sm*60 + ss
  t2 = eh*60*60 + em*60 + es
  t = t2 - t1

  h = t//60//60%24
  m = t//60%60
  s = t%60
  print(h, m, s)