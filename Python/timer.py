import time 

def timer(sec, min):
   while min < 70:
      sec = sec + 1
      print(sec, min)
      time.sleep(2)
      
      if sec > 60:
         sec = 0
         min += 1
         print(sec, min)
          
      elif(min == 5):
         min = min + 10
         print(sec, min)
         
      else: 
          break
         
timer(0,0)

     