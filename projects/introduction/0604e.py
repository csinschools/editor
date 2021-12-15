from pyangelo import *
from math import *
from time import *

playing = True
x = 0
dx = 0

label .keep_playing

# scroll the wave to the left
dx = dx + 0.6

clearScreen(BLACK)

x = 0
label .keep_drawing

# draws the wave, try changing some of these numbers and see what happens
drawText("😀", x, 500 / 2 + 500 / 3 * sin((x + dx) / (330)* 2 * pi), "20px consolas", WHITE)

x = x + 10
if x < 290:
  goto .keep_drawing

sleep(0.016)

if playing == True:
  goto .keep_playing