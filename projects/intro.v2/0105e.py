from pyangelo import *
from random import *

blockSize = 20
font = str(blockSize) + "px consolas"

progress = -1
start = 0
gameState = 'intro'

label .here
clearScreen(BLACK)
drawText("=== SNAKE ===", 80, 460, font, WHITE)
drawText("Score: " + str(start), 18, 410, font, WHITE)

# draw the border
drawRect(18, 35, \
         290, 365, 1, WHITE)    

if gameState == 'intro':
    if progress >= 0:
        font = str(blockSize * 1.5) + "px consolas"
        drawText("YOU LOST!", 85, 310, font, RED)
    font = str(blockSize) + "px consolas"
    drawText("Controls:", 105, 270, font, WHITE)
    drawText("'W' moves up", 75, 235, font, WHITE)
    drawText("'S' moves down", 75, 205, font, WHITE)
    drawText("'A' moves left", 75, 175, font, WHITE)
    drawText("'D' moves right", 75, 145, font, WHITE)
    
    drawText("Press 'ENTER' to play"\
                        , 45, 85, font, WHITE)
    if isKeyReleased('Enter'):
        gameState = 'play'
        # Initializing values
        start = 0
        speed = 4
        
        # Initial snake co-ordinates
        snake = [[4 * blockSize, 15 * blockSize], \
                 [3 * blockSize ,15 * blockSize], \
                 [2 * blockSize, 15 * blockSize]]
        food = [7 * blockSize, 13 * blockSize]    
        dx = 1
        dy = 0
        progress = 0     
elif gameState == 'play':
    # check for keys
    if isKeyPressed('d') or isKeyPressed('ArrowRight'):
        dx = 1
        dy = 0
    elif isKeyPressed('a') or isKeyPressed('ArrowLeft'):
        dx = -1
        dy = 0
    elif isKeyPressed('s') or isKeyPressed('ArrowDown'):
        dx = 0
        dy = -1
    elif isKeyPressed('w') or isKeyPressed('ArrowUp'):
        dx = 0
        dy = 1

    progress = progress + speed * timeElapsed()
    if progress >= 1.0:
        progress = 0
        # move the snake body
        for n in range(len(snake) - 1, 0, -1):
          snake[n][0] = snake[n - 1][0]
          snake[n][1] = snake[n - 1][1]      
        snake[0][0] = snake[0][0] + dx * blockSize
        snake[0][1] = snake[0][1] + dy * blockSize

    # draw food
    drawText("🍓", food[0], food[1], font)
    # draw head
    drawText("😀", snake[0][0], snake[0][1], font)
    # draw body
    for n, body in enumerate(snake[1:]):
        drawText("📀", body[0], body[1], font)

    if snake[0][0] <= 18 or snake[0][1] >= 400 or snake[0][0] >= 300 or snake[0][1] <= 20: 
        gameState = 'intro'            

    # did the snake eat itself?
    if snake[0] in snake[1:]:
        gameState = 'intro'
    
    # snake eats food
    if snake[0] == food:
      # grow snake
      snake.append([snake[-1][0], snake[-1][1]])
      start += 100
      speed += 0.25
      # generate new food
      # can't be located in the snake
      while food in snake:
        foodX = randint(1, 14) * blockSize
        foodY = randint(2, 19) * blockSize
        food = [foodX, foodY]         
goto .here