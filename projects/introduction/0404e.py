from pyangelo import *
from time import *

# hint: you may want to do something with the line below
text = "CS in Schools!"

# hint: try changing some of these values to see what happens!
x = 0
y = 0
dx = 1
dy = 2

# you can leave the rest of these lines unchanged
label .keep_looping

# clears the screen between frames
# I wonder what happens if we remove this line....?
clearScreen(BLACK)

# update the x and y positions
x = x + dx
y = y + dy

# check for collision against borders
if x > 100:
  x = 100
  dx = -dx
elif x < 0:
  x = 0
  dx = -dx
if y > 480:
  y = 480
  dy = -dy
elif y < 0:
  y = 0
  dy = -dy

drawText(text, x, y, "10 px consolas", WHITE)

sleep(0.016)
  
goto .keep_looping