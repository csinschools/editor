# Simple 3D racing game!
# adapted from One Lone Coder's awesome tutorial @ https://www.youtube.com/watch?v=KkMZI5Jbf18

from math import sin
from time import time
from pyangelo import *
from goodies import playSound

# start playing music
# you can find more URLs for songs @ https://codeforschools.com/music
playSound("https://csinschools.io/editor/samples/music/Turbo_Outrun_01.mp3", True)

# track and scenery are drawn as blocked rectangles for speed (not individually plotting pixels)
blocksize = 4
screenWidth = 83 * blocksize
screenHeight = 125 * blocksize

#setCanvasSize(screenWidth, screenHeight)

# the distance travelled from the first segment
distance = 0
speed = 0

# track segments
# first element is the curvature (0 = straight, -1 = full left, 1 = full right)
track = []
track.append([0, 10])
track.append([0, 200])
track.append([0.25, 400])
track.append([0, 400])
track.append([-1, 100])
track.append([0, 200])
track.append([-1, 200])
track.append([1, 200])
track.append([0, 200])
track.append([0, 200])

# finish line
finishLine = 200

# used to determine which section of the track we are in
offset = 0
trackSection = 0

# interpolated curvature on the screen
curvature = 0

# used to determine how far the player steering has veered off the ideal curvature
trackCurvature = 0
playerCurvature = 0

finishedLap = False

lapTime = 0
fastestLap = 100
laps = 0
lapRecord = False

deltaTime = time()

# lap timer
timer = time()

while True:
    # hardcoding deltaTime for speed (and because framerate is on animationFrame)
    deltaTime = 8 * 0.0167
    
    if isKeyPressed('c'):
        print(playerCurvature)
    
    if isKeyPressed('w'):
        speed += 0.1 * deltaTime
    else:
        speed -= 0.05 * deltaTime
        
    if isKeyPressed('a'):
        playerCurvature -= 0.7 * deltaTime * 0.05
        
    if isKeyPressed('d'):
        playerCurvature += 0.7 * deltaTime * 0.05
        
    # so player doesn't steer off the screen
    if playerCurvature > 0.7:
        playerCurvature = 0.7
    elif playerCurvature < -0.7:
        playerCurvature = -0.7
        
    # has player steered off the road?
    if abs(playerCurvature - trackCurvature) >= 0.4:
        speed -= 0.15 * deltaTime
        
    # clamping speed
    if speed > 2.0:
        speed = 2.0
    elif speed < 0.0:
        speed = 0.0
        
    # progress through lap
    distance += (10 * speed) * deltaTime

    # figure out which track section I'm in
    while trackSection < len(track) and offset <= distance:
        offset += track[trackSection][1]
        trackSection += 1
        
    # finished all sections, reset to beginning of track
    if trackSection == len(track) - 1:
        trackSection = 0
        distance -= offset
        offset = 0
        finishedLap = False
        
    # interpolate curvature to section curvature
    targetCurvature = track[trackSection - 1][0]
    curvatureDelta = (targetCurvature - curvature) * deltaTime * speed * 0.04
    curvature += curvatureDelta
    
    # accumulating track curvature across whole track
    trackCurvature += curvature * deltaTime * speed * 0.04
    
    # draw sky
    clearScreen(BLUE)
    fillRect(0, screenHeight * 0.80, screenWidth, screenHeight * 0.20, LIGHT_BLUE)
    
  
    fillRect(0, screenHeight * 0.95, screenWidth, screenHeight * 0.05, DARK_BLUE)
    
    for y in range(0, screenHeight // 2, blocksize):
        # scaling factor for perspective
        # max at bottom of screen, min at horizon (screenHeight / 2)
        perspective = 1.0 - (float(y) / (screenHeight // 2))

        carPos = playerCurvature - trackCurvature

        # move vanishing point in opposite direction to curvature (for first person perspective        
        midPoint = 0.5 - carPos + curvature * (1.0 - perspective)**3
        
        # scale boundaries for road, guards, grass and lane marking
        roadWidth = 0.05 + 0.8 * perspective
        guardWidth = roadWidth * 0.15
        laneWidth = roadWidth * 0.01
        
        # redefining roadwidth to mid screen
        roadWidth *= 0.5
        leftGrass = (midPoint - roadWidth - guardWidth) * screenWidth
        rightGrass = (midPoint + roadWidth + guardWidth) * screenWidth
        leftGuard = (midPoint - roadWidth) * screenWidth
        rightGuard = (midPoint + roadWidth) * screenWidth
        
        leftLane =  (midPoint - laneWidth) * screenWidth
        rightLane =  (midPoint + laneWidth) * screenWidth
        
        # draw the grass
        fillRect(0, y, leftGrass, blocksize, GREEN)
        fillRect(rightGrass, y, screenWidth - rightGrass, blocksize, GREEN)
        
        # draw the guards
        # using this sine function to simulate perspective banding
        guardBandColouring = sin(80.0 * (1.0 - perspective)**3 + distance * 0.1)
        guardColour = RED
        if guardBandColouring < 0:
            guardColour = WHITE
        fillRect(leftGrass, y, leftGuard - leftGrass, blocksize, guardColour)
        fillRect(rightGuard, y, rightGrass - rightGuard, blocksize, guardColour)
        
        # draw the road
        fillRect(leftGuard, y, rightGuard - leftGuard, blocksize, LIGHT_GREY)
        
        # draw the lane
        laneColouring = sin(60.0 * (1.0 - perspective)**3 + distance * 0.1)
        laneColour = WHITE
        if laneColouring < 0:
            laneColour = LIGHT_GREY      
        fillRect(leftLane, y, rightLane - leftLane, blocksize, laneColour)
        
        # how far are we to the finishing line?
        distanceToLine = finishLine - distance
        if distanceToLine >= 0 and distanceToLine <= 150:
            # draw the finish line, with perspective
            linePerspective = 1 - (distanceToLine / 150)
            fillRect(leftGuard, screenHeight // 2 - linePerspective * screenHeight // 2, rightGuard - leftGuard, blocksize, WHITE)  
            
        # lap times
        if distanceToLine <= 0 and not finishedLap:
            lapTime = time() - timer
            timer = time()
            
            if laps >= 1:
                if lapTime < fastestLap:
                    fastestLap = lapTime
                    lapRecord = True
                else:
                    lapRecord = False
           
            finishedLap = True
            laps += 1
            
    # draw hills (it's just a sine wave)
    for x in range(0, screenWidth, blocksize):
        hillHeight = int(abs((sin(x * 0.005 + (trackCurvature * 5) + 1) + 0.3) * 16))
        fillRect(x, screenHeight//2, blocksize, hillHeight * blocksize, ORANGE)\
        
    if laps == 0:
        drawText('PYRACER', 60, screenHeight - 80, '40px arial', RED)
        drawText('Press WASD keys', 40, screenHeight - 140, '30px arial', WHITE)
        drawText('to Drive!!!', 90, screenHeight - 180, '30px arial', WHITE)
        
    # display lap times
    if distanceToLine < 0 and distanceToLine > -600:
        if laps <= 1:
            drawText('LET\'S GO!!!', 55, screenHeight - 120, '40px arial', YELLOW)
        elif lapRecord:
            drawText('LAP RECORD!', 30, screenHeight - 120, '40px arial', RED)
        else:
            drawText('LAP!', 120, screenHeight - 120, '40px arial', WHITE)
    if laps >= 2:
        drawText("Lap time: " + str(round(lapTime, 2)), 10, screenHeight - 30, '20px arial', WHITE)
        drawText("Fastest lap: " + str(round(fastestLap,2)), 170, screenHeight - 30, '20px arial', WHITE)    