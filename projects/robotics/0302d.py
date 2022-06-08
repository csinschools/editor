from csinsc import *
from microbit import *

# Connect to the micro:bit
r2d2 = Microbit()

# Enter a loop
label .again

# Get our bearing and show it
direction = r2d2.getBearing()
print("You are facing: " + str(direction) + " degrees")
sleep(0.5)

# Go back to the label
goto .again
