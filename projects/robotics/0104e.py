from csinsc import *
from microbit import *

# Connect to the micro:bit
m1 = ________()

# Create the starting point of the animation
label .animation

# Turn on an LED - make a cool pattern!
m1.setLED(__, __, ____)

# Sleep
_____(1)
# Clear the LED screen
m1.clear()

# Make a different pattern, or change the first one a little
m1.setLED(__, __, ____)

# Sleep
_____(1)
# Clear the LED screen
m1.clear()

# Go back to the start of the animation
goto .animation
