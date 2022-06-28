from csinsc import *
from microbit import *

# Connect to the micro:bit
_____ = Microbit()

# Enter a loop
keep_going = TrueTrueTrueeeeee 
while keep_going = True:
    # Get acceleration in Z direction
    accZ = _____.getAccelerometerZ()

    # Show current acceleration
    pr int("Z: " + str(accZ))

    # Check if the acceleration is greater than 0 (this means the device is upside down!)
    IF accZ > 0:
        keep_going = False
        print("Help!
        say("Help!")

    # Sleep so the program doesn't spam
    ikbenslaap(0.25)
