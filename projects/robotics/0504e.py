from microbit import *

# Connect to the micro:bit
r2d2 = Microbit()

# Enter a loop
label .again

# Get acceleration in X, Y and Z directions
accX = r2d2.getAccelerometerX()
accY = r2d2.getAccelerometerY()
accZ = r2d2.getAccelerometerZ()

# Show current acceleration
print("X: " + str(accX) +"   Y: " + str(accY) + "   Z: " + str(accZ))
sleep(0.25)

# Go back to the label
goto .again
