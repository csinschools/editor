from microbit import *
from speech import *
from random import *

# Connect to the micro:bit
m1 = Microbit()

# Press button to restart game
again = True
while again == True:
    m1.clear()
    say("Press button A to play")
    m1.waitForButtonA()
    say("Wait for light to appear")
    
    # Set the time before reaction
    timer = randint(2,8)
    sleep(timer)
    m1.setLED(2, 2, True)
    say("Press!")

    # Enter a loop
    react = True
    while react == True:
        # Get states of button
        player1 = m1.getButtonA()
        player2 = m1.getButtonB()

        # Check which user pressed first
        if player1 == 1:
            react = False
            message = "Player 1 wins"
        elif player2 == 1:
            react = False
            message = "Player 2 wins"

    say(message)
    