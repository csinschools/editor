from pyangelo import *

# this sets the emoji for the head
head = "👩"

# this sets the emoji for the body
body = "👗"
# these variables determine the position and size of the body
# this will need to change depending on the emoji used
# for example, the t-shirt should be smaller than the dress
body_x = 100
body_y = 250
body_size = 80

label .animate
clearScreen(WHITE)

# check for keys for head
# Exercise 1: Add more emojis for the heads!
if isKeyPressed('q') == True:
    head = "👩"
elif isKeyPressed('w') == True:
    head = "👸"

# check for keys for body
# Exercise 2: Add more emojis for the bodies
# NOTE: You'll need to set different values for:
# body_x, body_y, body_size to ensure that 
# the body is lined up correctly with the head!
if isKeyPressed('a') == True:
    body = "👗"
    body_x = 100
    body_y = 250
    body_size = 80    
elif isKeyPressed('s') == True:
    body = "👚"
    body_x = 105
    body_y = 274
    body_size = 60
    
# draws the body and head
# note how the body is drawn first... this is so that
# the head appears overlaps the body, not the other way
# around
drawText(body, body_x, body_y, str(body_size) + "px consolas")
drawText(head, 118, 330, "40px consolas")

goto .animate