from csinsc import *
from microbit import *
from speech import *

# Connect to the micro:bit
m1 = Microbit()

# Enter a loop
keep_going = ____
while __________ == ____:
    # Get the bearing from the magnetometer (compass)
    bearing = m1._________()

    print("bearing: " + str(_______))
    
    # So the loop doesnt spam
    sleep(0.5)
