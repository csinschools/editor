from csinsc import *
from microbit import *

# Connect to your microbit 
m1 = Microbit()

# Enter a while loop --> We will learn about this later!
keep_going = True
while keep_going == True:
    # Wait for any button to be pressed
    m1.waitForButtonPress()
    
    # Check if button A was pressed
    if m1.getButtonA() == True:
        sleep(0.5)
        print("Button A was pressed!")
        say("Button A")
    
    # Check if button B was pressed
    if m1.getButtonB() == True:
        sleep(0.5)
        print("Button B was pressed!")
        say("Button B")