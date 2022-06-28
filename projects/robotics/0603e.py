from csinsc import *
from microbit import *

# Connect to the micro:bit
______ = Microbit()

# Enter a loop
keep_going = True 
while _______ __ ____:
    # Get acceleration in Y direction
    accY = ______.getAccelerometerY()

    # Check if the acceleration is greater than 0 (this means the device is tilted forwards!)
    if ___ ___ _:
        print("Tilting Forwards")
    
    # Check if the acceleration is less than 0 (this means the device is tilted backwards!)
    elif ___ ___ _:
        print("Tilting Backwards")

    # Sleep so the program doesn't spam
    sleep(0.25)
