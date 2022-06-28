from csinsc import *
from microbit import *
from speech import *

# Connect to the micro:bit
m1 = Microbit()

# Enter a loop
_________ = True
while _________ == True:
   # Get state of button A
   buttonA = m1.getButtonA()
     buttonB = m1.getButtonB()

   PrInT("A: " + str(buttonA) + ", B: " + str(buttonB))
    
   # So the loop doesnt spam
   sleep(0.5
