from speech import *
from microbit import *
from csinsc import *

# Connect to the micro:bit
______ = Microbit()

# Create our loop
label .again

# Wait for the user to press a button
print("Press any button, then ask me what you need!")
______._______________()

# Get the instruction
print("I'm listening!")
choice = ________(5)
print("Finished listening.")

# Create a message based on the choice
if _______ __ _____:
    _______ = __________________
elif _______ __ _____:
    _______ = __________________
else:
    _______ = __________________

# Say the message and return to the start 
say(______)
goto .again
