from csinsc import *
from microbit import *

# Connect to the micro:bit
linda = Microbit()

# Enter a loop
keep_going = True 
while keep_going == True:
    # Get button presses
    btnA = linda.getButtonA()
    btnB = linda.getButtonB()

    # Tell user they have pressed a button
    if btnA > 0 or btnB > 0:
        print("Button Pressed")

    # Sleep so the program doesn't spam
    sleep(0.25)
