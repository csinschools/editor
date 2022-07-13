from microbit import *

# Connect to the micro:bit
m1 = Microbit()

# Enter a loop
keep_going = True
while keep_going == True:
    # Get state of button A
    buttonA = m1.getButtonA()
    buttonB = m1.getButtonB()

    print("A: " + str(buttonA) + ", B: " + str(buttonB))
    
    # So the loop doesn't spam
    sleep(0.5)
