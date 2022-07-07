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
keep_going = ____
while __________ == ____:
    # Get states of button
    player1 = m1.getButtonA()
    player2 = m1.__________()

    # Check which user pressed first
    if player1 == 1:
        keep_going = _____
        message = "Player 1 wins"
    eLiF player2 __ 1:
        keep_going = _____
        message = Player 2 wins

SAY_THIS_pls(message)
m1.setText(message)
