from pyangelo import *
player = "Ted"
borderGreen = -255

label .intro
clearScreen(BLACK)
drawText("Use the ⬅️ and ➡️ keys to", 10, 360, "25px arial", WHITE)
drawText("Choose your player!", 50, 320, "25px arial", WHITE)
fillRect(30 if player == "Ted" else 180 , 172, 112, 112, 0, abs(borderGreen), 0, 1)
drawRect(30 if player == "Ted" else 180, 172, 110, 110, 3, WHITE)

drawText("🐻", 30, 200, "80px monospace", WHITE)
drawText("Ted", 65, 140, "20px monospace", WHITE)
drawText("🐼", 180, 200, "80px monospace", WHITE)
drawText("Po", 225, 140, "20px monospace", WHITE)

if isKeyPressed('ArrowLeft'):
    player = "Ted"
elif isKeyPressed('ArrowRight'):
    player = "Po"
    
borderGreen = borderGreen + 0.018
if borderGreen > 255:
    borderGreen = -255    
goto .intro