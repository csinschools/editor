from goodies import *
setVolume(20)
playSound("https://csinschools.io/editor/samples/music/fantasy02.mp3", True)

label .forest
clear()
printImage("https://csinschools.io/editor/samples/images/forest.png", 300, 450)
print("You are in a forest.")
print("Birds are chirping and the wind rustles through the trees.")
printButton("Follow the path", 80, 270)
printButton("Go west", 30, 420)
waitForButtonClick()
if isButtonClicked("Follow the path"):
    goto .cave
if isButtonClicked("Go west"):
    goto .castle
    
label .cave
clear()
printImage("https://csinschools.io/editor/samples/images/cave.png", 300, 450)
print("You next to a cave.")
print("It looks very dark and cold inside.")
printButton("Return to the path", 100, 420)
waitForButtonClick()
if isButtonClicked("Return to the path"):
    goto .forest

    
label .castle
clear()
printImage("https://csinschools.io/editor/samples/images/castle.png", 450, 450)
print("You standing by a giant castle.")
print("The flags are fluttering in the wind.")
printButton("Go east", 380, 420)
waitForButtonClick()
if isButtonClicked("Go east"):
    goto .forest  