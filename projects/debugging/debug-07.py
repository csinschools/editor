# This code has 4 LOGIC ERRORS. Can you find them?

from csinsc import *

'''
A map of the locations in this game:

     Bedroom
      /
     /
    /
Dining room
    \
     \
      \
     Kitchen ----- Window
'''

# The game start scene.
label .game_start
# The introductory text to our game. Put your instructions here!
print(Colour.green + "Welcome to your adventure game. This is where you")
print("can write the introduction to your game,")
print("provide instructions, and mention the goals." + Colour.reset)

# The dining room scene. 🐞🐞
label .dining_room
print("You are in the dining room.")
print("You can go to the kitchen or bedroom.")
whereto = input("Where would you like to go: ")
if whereto == "kitchen":
  goto .kitchen
print("You can't go there!")

# The kitchen scene. 🐞
label .kitchen
print("You are in the kitchen.")
print("You can go to the dining room or out the window.")
whereto = input("Where would you like to go: ")
if whereto == "dining room":
  goto .bedroom
if whereto == "out the window":
  goto .game_over
print("You can't go there!")
goto .kitchen

# The bedroom scene. 🐞
label .bedroom
print("You are in the bedroom.")
print("You can go to the dining room.")
whereto = input("Where would you like to go: ")
if whereto == "dining room":
  goto .dining_room
print("You can't go there!")
goto .kitchen

# The game over scene.
label .game_over
print("You climb out the kitchen window and run for the school bus!")
print(Colour.yellow + "Game Over!" + Colour.reset)
