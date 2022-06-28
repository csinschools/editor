from csinsc import *
from microbit import *

# Connect to the micro:bit
_____ = Microbit()

# Enter a loop
keep_going = ____ 
while __________ == True:
    # Get button presses
    btnA = _____.getButtonA()
    btnB = _____.__________()
    temp = _____.getTemperature()

    # Tell user they have pressed a button
    if btnA > 0 or btnB _ _ or temp _ _:
        say("Ouch!!")

    # Sleep so the program doesn't spam
    sleep(0.25)
