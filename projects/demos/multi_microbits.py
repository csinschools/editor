from microbit import *

m1 = Microbit()
m2 = Microbit()
m1.setText("Hello")
m2.setText("Hi")

while True:
    if m1.isButtonAPressed():
        print(m1.getAccelerometer())
    if m1.isButtonBPressed():
        print(m1.getTemperature())
    if m2.isButtonAPressed():
        print(m2.getAccelerometer())
    if m2.isButtonBPressed():
        print(m2.getTemperature())