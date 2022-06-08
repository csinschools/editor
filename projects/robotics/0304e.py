from csinsc import *
from microbit import *

# Connect to the micro:bit
____ = Microbit()

# Enter a loop
label .again

# Get acceleration in X, Y and Z directions
accX = r2d2.getAccelerometerX()
accY = ____.getAccelerometerY()
accZ = ____._________________()

# Show current acceleration
print("X: " + str(accX) +"   Y: " + str(___) + "   Z: " + ___(___))
sleep(0.25)

# Go back to the label
goto .again
