from csinsc import *
from microbit import *

# Connect to the micro:bit
indicator = Microbit()

# Enter a loop
keep_going = True 
while keep_going == True:
    # Get acceleration along X axis
    accX = indicator.getAccelerometerX()

    # Check for lean left
    if accX < -2:
        indicator.clear()
        indicator.setLED(0, 2, True)
        indicator.setLED(1, 3, True)
        indicator.setLED(1, 1, True)
        indicator.setLED(2, 0, True)
        indicator.setLED(2, 4, True)
    # Check for lean right
    elif accX > 2:
        indicator.clear()
        indicator.setLED(4, 2, True)
        indicator.setLED(3, 3, True)
        indicator.setLED(3, 1, True)
        indicator.setLED(2, 0, True)
        indicator.setLED(2, 4, True)  
    # No lean   
    else:
        indicator.clear()
        indicator.setLED(1, 2, True)
        indicator.setLED(2, 2, True)
        indicator.setLED(3, 2, True)  

    sleep(0.5)