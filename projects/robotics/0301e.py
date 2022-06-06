from csinsc import *
from microbit import *

# Connect to the micro:bit
m1 = ________()

# Enter a loop
label .again

# Wait for button A to be pressed
m1.__________()
sleep(0.5)

# Get current temperature
temp = m1.__________()

# Print the temperature to the console
print("Temperature: " + ___(temp) + " C")

goto .again
