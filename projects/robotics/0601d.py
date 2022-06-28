from csinsc import *
from microbit import *

# Connect to the micro:bit
r2d2 = Microbit()

# Enter a loop
keep_going = True 
while keep_going == True:
    # Get acceleration in Z direction
    accZ = r2d2.getAccelerometerZ()

    # Show current acceleration
    print("Z: " + str(accZ))

    # Check if the acceleration is greater than 0 (this means the device is upside down!)
    if accZ > 0:
        keep_going = False
        print("Help!")
        say("Help!")

    # Sleep so the program doesn't spam
    sleep(0.25)
