from microbit import *
from pyangelo import *
from math import *

m1 = Microbit()
prediction = 0
state = 0
c = 0

while True:
    c = c + 1
    if c > 628:
        c = 0
    
    if state == 0:
        clearScreen(255, 255, 255, 1)
        drawText("Press [enter]", 10, 320, "30px arial", BLACK)
        drawText("to reveal", 80, 260, "30px arial", BLACK)
        drawText("the prediction", 120, 200, "30px arial", BLACK)
        if (m1.isButtonAPressed() or m1.isButtonBPressed()) and prediction < 3:
            prediction = prediction + 1
        if isKeyReleased('Enter'):
            state = 1
    elif state == 1:
        clearScreen(WHITE)
        if prediction == 0:
            drawText("♥", 70, 150, "320px arial", RED)
        if prediction == 1:
            drawText("♦", 80, 150, "320px arial", RED)
        if prediction == 2:
            drawText("♣", 60, 150, "320px arial", BLACK)
        if prediction == 3:
            drawText("♠", 80, 150, "320px arial", BLACK)
        if isKeyReleased('Enter'):
            prediction = 0
            state = 0