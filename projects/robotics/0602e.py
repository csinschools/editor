from csinsc import *
from microbit import *

# Connect to the micro:bit
charles = Microbit()

# Enter a loop
keep_going = True 
while keep_going == True:
    # Get acceleration in X direction
    accX = charles.getAccelerometer___()

    # Check if the acceleration is greater than 0 (this means the device is tilted right!)
    if accX ___ 0:
        print("X: " + str(____) + " --> Tilting Right")
    
    # Check if the acceleration is less than 0 (this means the device is tilted left!)
    elif ____ ___ ___:
        print("X: " + str(____) + " --> Tilting Left")

    # Sleep so the program doesn't spam
    sleep(0.25)
