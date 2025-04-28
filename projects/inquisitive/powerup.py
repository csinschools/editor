from pyangelo import *
from goodies import *

goto .setup
label .start_game

#### The Order and Types of Enemies in the Level #### 
level = [['😡', 330], ['💀💀', 450], ['💰', 560], ['🤪🤪🤪', 720], ['🦖🦖', 870], ['👀👀👀', 1000], ['🛑🛑🛑🛑', 1160]]
################# Initial Settings ################## 
hiScore = 0
prevScore = 0
speed = -150
speedMultiplier = 1


################# The Intro Screen ################## 
label .intro
deltaTime = timeElapsed()
clearScreen(LIGHT_GREY)
drawText("Click on the screen or", 20, 250, "20px monospace", WHITE)
drawText("touch the screen to play!", 20, 220, "20px monospace", WHITE)
drawText("Hi Score:" + str(hiScore), 0, 460, "20px monospace", WHITE)
drawText("Prev Score:" + str(prevScore), 0, 430, "20px monospace", WHITE)
if isMousePressed():
    player = Player()
    player.x = 30
    player.y = 40
    player.icon = "😊" 
    player.lives = 1
    goto .get_ready
goto .intro

############### The Get Ready Screen ################ 
label .get_ready
deltaTime = timeElapsed()
clearScreen(LIGHT_GREY)
drawText("GET READY!", 110, 250, "20px monospace", WHITE)
refresh()
sleep(1)
playSound("https://csinschools.io/editor/samples/music/Lemmings_01.mp3")
goto .reset_enemies

##################### The Game! #####################
label .reset_enemies
enemies = []
for e in level:
    newEnemy = Enemy(speed)
    newEnemy.icon = e[0][0]
    newEnemy.height = len(e[0])
    newEnemy.x = e[1]
    newEnemy.y = 1.33 * newEnemy.x
    enemies.append(newEnemy)
    
label .game
deltaTime = timeElapsed()
clearScreen(BLUE)
for e in enemies:
    e.update(speedMultiplier)
if isMousePressed():
    if player.isOnGround == True:
        player.jump(1100)
player.update()
drawText("Lives: " + str(player.lives), 0, 460, "20px monospace", WHITE)
drawText("Score: " + str(player.score), 0, 430, "20px monospace", WHITE)
drawLevel()
for e in enemies:
    if e.isAlive:
        e.draw()
player.draw()
for e in enemies:
    if e.isAlive and player.collidesWith(e):
        if e.icon == "💰":
            player.score = player.score + 100
            enemies.remove(e)
        else:
            player.lives = player.lives - 1
            e.isAlive = False
# last enemy has passed the screen
if enemies[-1].x < -60:
    goto .reset_enemies
# player has no more lives
if player.lives <= 0:
    prevScore = player.score
    if prevScore > hiScore:
        hiScore = player.score
    goto .game_over
goto .game

############### The Game Over Screen ################
label .game_over
stopSound()
deltaTime = timeElapsed()                
clearScreen(BLACK)
drawText("GAME OVER!", 110, 250, "20px monospace", RED)
refresh()
sleep(1)
goto .intro

############### The You Won!! Screen ################
label .win_screen
stopSound()
deltaTime = timeElapsed()                
clearScreen(BLACK)
drawText("YOU WON!!!", 110, 250, "20px monospace", GREEN)
refresh()
sleep(2)
goto .intro
        
############# Set up code (ADVANCED) ################
label .setup
enemies = []

class Entity:
    def __init__(self):
        self.icon = ""
        self.height = 1
        self.x = 300
        self.y = 400
        self.velocityX = 0
        self.velocityY = 0
        self.size = 20
        self.speedMultiplier = 1.0
        
        self.font = str(self.size) + "px monospace"
    def draw(self):
        for i in range(self.height):
            drawText(self.icon, self.x, self.y + self.size * i, self.font, WHITE)
    def collidesWith(self, entity):
        return overlaps(self.x, self.y, self.size, self.size * self.height, entity.x, entity.y, entity.size, entity.height * entity.size)
    def update(self, gravity, speedMultiplier = 1.0):
        self.velocityY -= gravity * deltaTime
        self.x += self.velocityX * deltaTime * speedMultiplier
        self.y += self.velocityY * deltaTime * speedMultiplier
        
class Player (Entity):
    def __init__(self):
        Entity.__init__(self)
        self.lives = 1
        self.score = 0
        self._scoreTimer = 0
    def update(self, speedMultiplier = 1):
        self._scoreTimer += deltaTime 
        if self._scoreTimer > 0.5:
            self._scoreTimer -= 0.5
            self.score += 1
        Entity.update(self, 3600, speedMultiplier)
        # don't fall down below the floor
        if self.y < 40:
            self.y = 40
            self.velocityY = 0
    def draw(self):
        Entity.draw(self)
    @property
    def isOnGround(self):
        return self.y == 40
    def jump(self, jumpSpeed):
        self.velocityY = jumpSpeed
        
class Enemy (Entity):
    def __init__(self, speed):
        Entity.__init__(self)
        self.speed = speed
        self.velocityY = speed
        self.velocityX = speed * 0.75
        self.isAlive = True
    def update(self, speedMultiplier = 1):
        Entity.update(self, 0, speedMultiplier)

def drawLevel():
    background = "↗️"
    for i in range(28):
        drawText(background, 15 + i * 15, i * 15 * 1.33, "20px monospace")

goto .start_game

