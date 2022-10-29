from pyangelo import *

class Entity:
    def __init__(self):
        self.icon = "😊"
        self.height = 1
        self.x = 150
        self.y = 400
        self.vx = 0
        self.vy = 0
        self.size = 40
        
        self.font = str(self.size) + "px monospace"
    def draw(self):
        for i in range(self.height):
            drawText(self.icon, self.x, self.y + self.size * i, self.font)
    def collidesWith(self, entity):
        return overlaps(self.x, self.y, self.size, self.size * self.height, entity.x, entity.y, entity.size, entity.height * entity.size)
    def update(self, yAcc):
        if yAcc != 0:
            self.vy += yAcc * delta
        self.x += self.vx * delta
        self.y += self.vy * delta

player = Entity()
player.icon = "🚁"

landedSafely = False
delta = timeElapsed()

state = "game"

fuel = 0

earth = 1.0
mars = 0.38
moon = 0.16
neptune = 1.1
planet = earth # earth = 1, mars = 0.38, moon = 0.16, neptune = 1.1
gravity = -800 * planet
thrust = 0

landx = 100
while True:
    delta = timeElapsed()
    clearScreen(BLACK)
    if state == "game":
        if isKeyPressed('w'):
            thrust = 1600
            fuel = fuel + 0.1
        else:
            thrust = 0
            
        if player.y >= 440:
            player.y = 440
            thrust = 0
            player.vy = 0
        if isKeyPressed('a'):
            player.x += -100 * delta
        if isKeyPressed('d'):
            player.x += 100 * delta


        if player.x < 0 or player.x > 280:
            state = "end"
        net = gravity + thrust
        #print(gravity, thrust, net)
        #if net > 10:
        #    net = 10
        player.update(net)
        player.draw()
        
        drawText("Fuel:" + str(int(fuel)), 0, 460, "20px monospace", WHITE)
        
        if player.y < 20:
            player.y = 20
            if player.vy < -200:
                landedSafely = False
            else:
                landedSafely = True
            state = "end"
    elif state == "end":
        if not landedSafely:
            player.draw()
            drawText("CRASHED!", player.x - 20, player.y + player.size, "20px monospace", RED)
            drawText("💥", player.x + 10, player.y, "30px monospace")
            drawText("💥", player.x - 5, player.y + 10, "15px monospace")
            drawText("Fuel:" + str(int(fuel)), 0, 460, "20px monospace", WHITE)
        else:
            player.draw()
            drawText("LANDED!", player.x - 10, player.y + player.size, "20px monospace", GREEN)
            drawText("Fuel:" + str(int(fuel)), 0, 460, "20px monospace", WHITE)

    