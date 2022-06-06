from csinsc import *
from microbit import *

# Connect to the micro:bit
m1 = Microbit()

# Enter a loop
label .again

# Wait for any button press
m1.waitForButtonPress()
sleep(0.5)

# Get current temperature
temp = m1.getTemperature()

# Print the temperature to the user
print("Current temp is " + str(temp))

# Return to the start
goto .again
