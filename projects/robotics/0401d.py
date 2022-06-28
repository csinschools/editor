from speech import *
from microbit import *
from csinsc import *

# Connect to the micro:bit
assistant = Microbit()

# Create our loop
label .again

# Wait for the user to press a button, then sleep for 1 second
print("Press any button, then ask me what you need!")
assistant.waitForButtonPress()

# Get the instruction
print("I'm listening!")
choice = listen(5)
print("Finished listening.")
print("I heard you say: " + choice)

# Create a message based on the choice
if "weather" in choice:
    message = "It is " + str(assistant.getTemperature()) + " degrees."
elif "bearing" in choice:
    message = "You are facing " + str(assistant.getBearing()) + " degrees from north."
elif "joke" in choice:
    message = "What did one toilet say to the other? You look a bit flushed."
else:
    message = "Sorry, I did not understand"

# Say the message and return to the start 
print("My response was: " + message + "\n")
say(message)
goto .again
