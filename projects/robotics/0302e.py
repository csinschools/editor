from csinsc import *
from microbit import *

# Connect to the micro:bit
m1 = ________()

# Enter a loop
label .again

# Wait for button B to be pressed
m1.____________()
sleep(0.5)

# Get current temperature
temp = m1.____________()

# Make the micro:bit show the temperature
m1._______(temp)

goto .again