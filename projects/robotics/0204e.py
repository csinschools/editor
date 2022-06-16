from microbit import *
from speech import *

# Connect to your microbit 
m1 = ________()

# Wait for button A to be pressed
m1.___________()
sleep(0.5)

# Now the computer will listen to you
myWords = listen(5)

# Wait for button B to be pressed
m1.___________()
sleep(0.5)

# Computer will copy you
say(myWords)
