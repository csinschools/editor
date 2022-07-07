from microbit import *
from speech import *
from random import *

# Connect to the micro:bit
m1 = Microbit()

# Set the time before reaction
timer = randint(2,10)
sleep(timer)
m1.setLED(2, 2, True)

# Enter a loop
keep_going = True
while keep_going == True:
    # Get states of button
    player1 = m1.getButtonA()
    player2 = m1.getButtonB()

    # Check which user pressed first
    if player1 == 1:
        keep_going = False
        message = "Player 1 wins"
    elif player2 == 1:
        keep_going = False
        message = "Player 2 wins"

say(message)
m1.setText(message)
