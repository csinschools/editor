keep_going = True

count = 10

print("Press [enter] to count down!")

while keep_going == True:
  answer = input("Seconds to lift off: " + str(count))

  count = count - 1

  if count < 0:
    keep_going = False

print(r'''
       !
       !
       ^
      / \
     /___\
    |=   =|
    |  A  |
    |  u  |
    |  s  |
    |  t  |
    |  r  |
    |  a  |
    |  l  |
    |  i  |
    |  a  |    
    |  !  |        
    |     |
   /|##!##|\
  / |##!##| \
 /  |##!##|  \
|  / ^ | ^ \  |
| /  ( | )  \ |
|/   ( | )   \|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .  
  ''')
