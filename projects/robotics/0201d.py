from microbit import *
from speech import *

# Connect to your microbit 
m1 = Microbit()

# Wait for a button to be pressed
m1.waitForButtonPress()

# Do some things...
sleep(0.5)
print("A button was pressed!")
say("Ouch! That hurts!")
    