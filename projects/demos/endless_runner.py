from pyangelo import *
from math import *

level = [['😡', 300], ['💀💀', 370], ['💩', 430], ['🤬🤬🤬🤬', 540]]
enemies = []

class Entity:
    def __init__(self):
        self.icon = "😊"
        self.height = 1
        self.x = 300
        self.y = 400
        self.vx = 0
        self.vy = 0
        self.size = 20
        
        self.font = str(self.size) + "px monospace"
    def draw(self):
        for i in range(self.height):
            drawText(self.icon, self.x, self.y + self.size * i, self.font)
    def collidesWith(self, entity):
        return overlaps(self.x, self.y, self.size, self.size * self.height, entity.x, entity.y, entity.size, entity.height * entity.size)
    def update(self, gravity):
        if gravity != 0:
            self.vy -= gravity * delta
        self.x += self.vx * delta
        self.y += self.vy * delta
        
class Player (Entity):
    def __init__(self):
        Entity.__init__(self)
        self.lives = 1
        self.score = 0
        self.scoreAcc = 0
    def update(self):
        self.scoreAcc += delta 
        if self.scoreAcc > 0.5:
            self.scoreAcc -= 0.5
            self.score += 1
        Entity.update(self, 3600)
        if self.y < 40:
            self.y = 40
            self.vy = 0
        if isKeyPressed('a') and self.y == 40:
            self.vy = 1100
    def draw(self):
        Entity.draw(self)
        
class Enemy (Entity):
    def __init__(self):
        Entity.__init__(self)
        self.speed = speed
        self.vy = speed
        self.vx = speed * 0.75
        self.alive = True
    def update(self):

        Entity.update(self, 0)

def drawLevel():
    background = "↗️"
    drawLine(0, -35, 28 * 15, 28 * 15 * 1.33 - 35, 2, WHITE)

def resetLevel():
    global enemies
    enemies = []
    for e in level:

        newEnemy = Enemy()
        newEnemy.icon = e[0][0]
        newEnemy.height = len(e[0])
        newEnemy.x = e[1]
        newEnemy.y = 1.33 * newEnemy.x
        enemies.append(newEnemy)

state = "intro"

delta = timeElapsed()

hiScore = 0
prevScore = 0

while True:
    delta = timeElapsed()
    clearScreen(BLUE)
    
    if state == "intro":
        drawText("Hi Score:" + str(hiScore), 0, 460, "20px monospace", WHITE)
        drawText("Prev Score:" + str(prevScore), 170, 460, "20px monospace", WHITE)
        drawText("Press [space] to play!", 40, 250, "20px monospace", WHITE)

        if isKeyReleased(' '):
            speed = -150
            player = Player()
            player.x = 30
            drawText("Hi Score: " + str(hiScore), 0, 460, "20px monospace", WHITE)
            player.y = 40
            player.icon = "😊" 
            resetLevel()
            state = "game"
    elif state == "game":    
    
        for e in enemies:
            e.update()
        
        player.update()
    
        drawText("Lives: " + str(player.lives), 0, 460, "20px monospace", WHITE)
        drawText("Score: " + str(player.score), 200, 460, "20px monospace", WHITE)
        
        drawLevel()
    
        for e in enemies:
            if e.alive:
                e.draw()
        player.draw()
        
        for e in enemies:
            if e.alive and player.collidesWith(e):
                player.lives -= 1
                e.alive = False
                
        if player.x - 100 > enemies[-1].x:
            resetLevel()
        
        if player.lives <= 0:
            state = "intro"
            prevScore = player.score
            if prevScore > hiScore:
                hiScore = player.score
        