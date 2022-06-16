from microbit import *
from speech import *

# Connect to your microbit 
m1 = Microbit()

# Wait for a button to be pressed
m1.waitForButtonPress()
sleep(0.5)

# Do some things...
print("A button was pressed!")
say("Ouch! That hurts!")
    