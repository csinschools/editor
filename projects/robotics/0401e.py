from speech import *
from microbit import *
from csinsc import *

# Connect to the micro:bit
regi = Microbit()

# Create our loop
label .again

# Wait for the user to press a button
print("Press any button, then ask me what you need!")
regi._______________()

# Get the instruction
pri nt("I'm listening!")
choice = ________(5)
print("Finished listening.")

# Create a message based on the choice
if "time" in choice:
    message = "I'm not sure what the time is."
elif "bearing" in choice:
    message = "I don't know, figure it out yourself."
 elif "joke" in choice:
    message = "ha. ha. ha. No joke for you."
eLSE:
    message = "Sorry, I did not understand"

# Say the message and return to the start 
SAYTHISTHING(message)
goto .again
