from csinsc import *
from microbit import *

# Connect to the micro:bit
m1 = Microbit()

# Create the starting point of the animation
label .start

# Turn on the LEDs to make a face
# Left eye
m1.setLED(0, 0, True)
m1.setLED(0, 1, True)
m1.setLED(1, 0, True)
m1.setLED(1, 1, True)
# Right eye
m1.setLED(0, 3, True)
m1.setLED(0, 4, True)
m1.setLED(1, 3, True)
m1.setLED(1, 4, True)
# Smile
m1.setLED(3, 0, True)
m1.setLED(3, 4, True)
m1.setLED(4, 0, True)
m1.setLED(4, 1, True)
m1.setLED(4, 2, True)
m1.setLED(4, 3, True)
m1.setLED(4, 4, True)

# Sleep
sleep(1)
# Clear the LED screen
m1.clear()

# Turn on the LEDs to make a winky face
# Left eye
m1.setLED(0, 0, True)
m1.setLED(0, 1, True)
m1.setLED(1, 0, True)
m1.setLED(1, 1, True)
# Right eye
m1.setLED(1, 3, True)
m1.setLED(1, 4, True)
# Smile
m1.setLED(3, 0, True)
m1.setLED(3, 4, True)
m1.setLED(4, 0, True)
m1.setLED(4, 1, True)
m1.setLED(4, 2, True)
m1.setLED(4, 3, True)
m1.setLED(4, 4, True)

# Sleep
sleep(1)
# Clear the LED screen
m1.clear()

# Go back to the start of the animation
goto .start
