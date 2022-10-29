from pyangelo import *
from random import *
from microbit import *

# if wanting to use microbits as controllers, please set the boolean value below
# and flash your microbit by downloading the file: https://csinschools.io/flash-no-magnet
# and copying it over to your microbit
useMicrobit = True  

screenHeight = 480
screenWidth = 320

fontSize = 30
fontFamily = "monospace"

ballHeight = fontSize
font = str(fontSize) + "px " + fontFamily

player1Text = "▀▀▀▀"
player2Text = "▄▄▄▄"
ballText = "💣"

#p1Width = len(player1Text) * 10
p1Width = getStringWidth(player1Text, font)
p1Height = fontSize
p2Width = getStringWidth(player2Text, font)
p2Height = fontSize
ballWidth = getStringWidth(ballText, font)

p1Lives = 3
p2Lives = 3
r = 0
b = 0

if useMicrobit:    
    m1 = Microbit()
    m2 = Microbit()

gameState = "intro"
blinkCounter = 0
blinkDelay = 5000

intro = loadSound("samples/music/Lemmings_01.mp3")
song = loadSound("samples/music/Lemmings_02.mp3")
bounce = loadSound("samples/sounds/blip.wav")
loss = loadSound("samples/sounds/hit.wav")
#playSound(intro, True)

# bouncing intro animation setup
ballX = (screenWidth - ballWidth) / 2
ballY = (screenHeight - ballHeight) / 2
dirX = 1
dirY = 1
ballSpeed = 0.08
bouncing = False

if useMicrobit: 
    ballSpeed = ballSpeed * 2

introBall = choice(["💩","🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😎", "🤓", "🤠", "🥳", "🙉", "😻"])

while True:
    if isKeyPressed('Escape'):
        break
    r = r - 0.15
    b = b - 0.15
    if r < 0:
        r = 0
    if b < 0:
        b = 0
    clearScreen(r, 0, 0, 1)
    if gameState == "intro":
        drawText(introBall, ballX, ballY, font, WHITE)
        ballX = ballX + ballSpeed * dirX
        ballY = ballY + ballSpeed * dirY
        
        if ballY > screenHeight * 0.75 - fontSize:
            ballY = screenHeight * 0.75 - fontSize
            dirY = -dirY
            b = 255
            introBall = choice(["💩","🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😎", "🤓", "🤠", "🥳", "🙉", "😻"])
        elif ballY < screenHeight * 0.25 + fontSize:
            ballY = screenHeight * 0.25 + fontSize
            dirY = -dirY
            introBall = choice(["💩","🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😎", "🤓", "🤠", "🥳", "🙉", "😻"])
            b = 255
        if ballX < 0:
            ballX = 0
            introBall = choice(["💩","🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😎", "🤓", "🤠", "🥳", "🙉", "😻"])
            dirX = -dirX
            b = 255
        elif ballX > screenWidth - ballWidth:
            ballX = screenWidth - ballWidth
            dirX = -dirX
            introBall = choice(["💩","🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😎", "🤓", "🤠", "🥳", "🙉", "😻"])
            b = 255
        
        blinkCounter = blinkCounter + 1
        drawText("PONG", screenWidth / 2.5, screenHeight * 0.75, font, 255, 255, b, 1)
        if blinkCounter > blinkDelay:
            drawText("Press [space]!", screenWidth / 6, screenHeight * 0.25, font, WHITE) 
            if useMicrobit:
                m1.setLEDs([[0,0,1,0,0],
                            [0,1,1,0,0],
                            [0,0,1,0,0],
                            [0,0,1,0,0],
                            [0,1,1,1,0]])
                m2.setLEDs([[0,1,1,1,0],
                            [1,0,0,0,1],
                            [0,0,1,1,0],
                            [0,1,0,0,0],
                            [1,1,1,1,1]])
            if blinkCounter > blinkDelay * 2:
                blinkCounter = 0
        else:
            if useMicrobit:
                m1.setLEDs([[0,0,1,1,0],
                            [0,1,0,0,1],
                            [0,1,0,0,1],
                            [0,1,1,1,0],
                            [0,1,0,0,0]])
                m2.setLEDs([[0,0,1,1,0],
                            [0,1,0,0,1],
                            [0,1,0,0,1],
                            [0,1,1,1,0],
                            [0,1,0,0,0]])
        if p1Lives <= 0:
            drawText("Player 2 wins!", screenWidth / 7, screenHeight * 0.5, font, GREEN)    
        elif p2Lives <= 0:
            drawText("Player 1 wins!", screenWidth / 7, screenHeight * 0.5, font, GREEN)   
        else:
            drawText("Player 1: A,D keys", fontSize/2, screenHeight * 0.55, font, YELLOW) 
            drawText("Player 2: J,L keys", fontSize/2, screenHeight * 0.55 - fontSize * 2, font, YELLOW) 
        started = isKeyPressed(' ')
       
        #if useMicrobit:
        #    started = started or m1.isButtonAPressed() or m1.isButtonBPressed() or m2.isButtonAPressed() or m2.isButtonBPressed()    
        if started:
            #stopSound(intro)
            #playSound(song, True)
            gameState = "game"
            x1 = (screenWidth - p1Width) / 2
            y1 = ballHeight
            x2 = (screenWidth - p1Width) / 2
            y2 = screenHeight - ballHeight
            
            ballX = (screenWidth - ballWidth) / 2
            ballY = (screenHeight - ballHeight) / 2
            
            dirX = 2 * (randint(0, 1) - 0.5) * uniform(0.45, 1.0)
            dirY = 2 * (randint(0, 1) - 0.5) * uniform(0.45, 1.0)
            
            ballSpeed = 0.03
            p1Speed = 0.06
            p2Speed = 0.06
            
            p1Lives = 3
            p2Lives = 3
            r = 0
            bouncing = False
            
            if useMicrobit: 
                ballSpeed = ballSpeed * 2
    elif gameState == "game":
        drawText(player1Text, x1, y1, font, GREEN)
        drawText(player2Text, x2, y2, font, YELLOW)
        drawText(ballText, ballX, ballY, font, RED)
        drawText("Lives: " + str(p1Lives), screenWidth / 2.7, 10, "17px monospace", WHITE)
        drawText("Lives: " + str(p2Lives), screenWidth / 2.7, screenHeight, "17px monospace", WHITE)
        
        if isKeyPressed('a'):
            x1 = x1 - p1Speed
        if isKeyPressed('d'):
            x1 = x1 + p1Speed
        
        if isKeyPressed('j'):
            x2 = x2 - p2Speed
        if isKeyPressed('l'):
            x2 = x2 + p2Speed
            
        if useMicrobit: 
            if m1.getButtonA() == 1:
                x1 = x1 - p1Speed
            if m1.getButtonB() == 1:
                x1 = x1 + p1Speed
            
            if m2.getButtonA() == 1:
                x2 = x2 - p2Speed
            if m2.getButtonB() == 1:
                x2 = x2 + p2Speed
            
        ballX = ballX + ballSpeed * dirX
        ballY = ballY + ballSpeed * dirY
        
        if ballX < 0:
            ballX = 0
            dirX = -dirX
        if ballX > screenWidth - ballWidth:
            ballX = screenWidth - ballWidth
            dirX = -dirX
            
        if x1 < 0:
            x1 = 0
        elif x1 > screenWidth - p1Width:
            x1 = screenWidth - p1Width
        if x2 < 0:
            x2 = 0
        elif x2 > screenWidth - p2Width:
            x2 = screenWidth - p2Width
            
        if ballY < 0 or ballY > screenHeight:
            #playSound(loss)
            if ballY < 0:
                p1Lives = p1Lives - 1
                r = 255
            else:
                p2Lives = p2Lives - 1
                r = 255
            if p1Lives <= 0 or p2Lives <= 0:
                gameState = "intro"
                #stopSound(song)
                #playSound(intro, True)
                ballX = (screenWidth - ballWidth) / 2
                ballY = (screenHeight - ballHeight) / 2
                dirX = 1
                dirY = 1
                ballSpeed = 0.03
                if useMicrobit: 
                    ballSpeed = ballSpeed * 2
                continue
            # reset the ball
            ballX = (screenWidth - ballWidth) / 2
            ballY = (screenHeight - ballHeight) / 2
            dirX = 2 * (randint(0, 1) - 0.5) * uniform(0.45, 1.0)
            dirY = 2 * (randint(0, 1) - 0.5) * uniform(0.45, 1.0)
            ballSpeed = 0.02
            
            if useMicrobit: 
                ballSpeed = ballSpeed * 2
            
            
        if overlaps(ballX, ballY, ballWidth, ballHeight / 2, x1, y1 + p1Height / 2, p1Width, p1Height / 2):
            if not bouncing:
                ballSpeed = ballSpeed * 1.1
                #ballY = y1 + ballHeight
                bouncing = True
                dirY = -dirY 
                dirX = dirX + uniform(0, 0.001) - 0.0005
                #playSound(bounce)
        elif overlaps(ballX, ballY, ballWidth, ballHeight, x2, y2, p2Width, p2Height / 2):
            if not bouncing:
                ballSpeed = ballSpeed * 1.1
                #ballY = y2 - ballHeight
                bouncing = True
                dirY = -dirY 
                dirX = dirX + uniform(0, 0.1) - 0.05
                #playSound(bounce)
        else:
            bouncing = False
stopAllSounds()


