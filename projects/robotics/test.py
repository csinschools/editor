from csinsc import *
from microbit import *
from random import *

label .start

print(Colour.orange + "This is a test file.")

yay = input("Is it working: ")

if yay == 'yes':
    print(Colour.green + "Yay!")
    goto .microbit
elif yay == 'no':
    print(Colour.red + "Ahh, dang...")
else:
    print("Enter [yes] or [no]")
    
goto .start

##################################################

label .microbit

m1 = Microbit()

while True:
    m1.waitForButtonPress()
    m1.setLED(randint(0,5), randint(0,5), True)
    print("Temp: " + str(m1.getTemperature()))
    print("Bearing: " + str(m1.getBearing()))
    print("Magnetometer: " + str(m1.getMagnetometer()))
    print("Accelerometer: " + str(m1.getAccelerometer()))
    
    
    
    