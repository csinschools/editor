from csinsc import *
from microbit import *

# Connect to the micro:bit
_____ = Microbit()

# Enter a loop
label .again

# Get our bearing and show it
direction = _____.getBearing()
print("You are facing: " + ___(_________) + " degrees")
sleep(0.5)

# Go back to the label
goto .again
