from pyangelo import *
from goodies import *

deltaHeight = 20.0

def rightHandRaised(skeleton):
    if len(skeleton) == 0:
        return 0
    scores = skeleton[0]
    leftWrist = 0
    leftElbow = 0
    leftShoulder = 0
    for score in scores:
        if score["score"] > 0.5:
            if score["part"] == "leftShoulder":
                leftShoulder = score["position"]["y"]
            elif score["part"] == "leftElbow":
                leftElbow = score["position"]["y"]
            elif score["part"] == "leftWrist":
                leftWrist = score["position"]["y"]
    if leftShoulder != 0:
        if leftElbow != 0:
            if leftWrist != 0:
                if leftShoulder > leftWrist + deltaHeight:
                    return 1
                else:
                    return -1
            else:
                if leftShoulder > leftElbow + deltaHeight:
                    return 1
                else:
                    return -1     
        else:
            if leftWrist != 0:
                if leftShoulder > leftWrist + deltaHeight:
                    return 1
                else:
                    return -1
            else:
                return 0
    else:
        return 0

def leftHandRaised(skeleton):
    if len(skeleton) == 0:
        return 0
    scores = skeleton[0]
    rightWrist = 0
    rightElbow = 0
    rightShoulder = 0
    for score in scores:
        if score["score"] > 0.5:
            if score["part"] == "rightShoulder":
                rightShoulder = score["position"]["y"]
            elif score["part"] == "rightElbow":
                rightElbow = score["position"]["y"]
            elif score["part"] == "rightWrist":
                rightWrist = score["position"]["y"]
    if rightShoulder != 0:
        if rightElbow != 0:
            if rightWrist != 0:
                if rightShoulder > rightWrist + deltaHeight:
                    return 1
                else:
                    return -1
            else:
                if rightShoulder > rightElbow + deltaHeight:
                    return 1
                else:
                    return -1     
        else:
            if rightWrist != 0:
                if rightShoulder > rightWrist + deltaHeight:
                    return 1
                else:
                    return -1
            else:
                return 0
    else:
        return 0
        

clearScreen(0, 0, 0, 1)
drawText("Loading Game...", 40, 420, "30px Arial", WHITE)   
drawText("Please wait", 70, 360, "30px Arial", WHITE)   
# preload images
drawImage("https://i.imgur.com/eALijkc.png", 0, 0, 0, 0)
drawImage("https://i.imgur.com/hSpp7He.png", 0, 0, 0, 0)
drawImage("https://i.imgur.com/AyVObiG.png", 0, 0, 0, 0)
drawImage("https://i.imgur.com/77JDxe9.png", 0, 0, 0, 0)
drawImage("https://i.imgur.com/F3E0rXn.png", 0, 0, 0, 0)
drawImage("https://i.imgur.com/yfxTwfS.png", 0, 0, 0, 0)
drawImage("samples/images/Dance tutorial 1.png", 0, 0, 0, 0)
drawImage("samples/images/Dance tutorial 2.png", 0, 0, 0, 0)
refresh()

showWebCam()

print(Colour.cyan + "Loading Pose model, this might take a while, please wait...")
loadPoseModel("https://teachablemachine.withgoogle.com/models/HurEXJ_4P/")
print(Colour.purple + "Successfully loaded!")

stabilityCount = 2

leftHands = [0] * stabilityCount
rightHands = [0] * stabilityCount

rightHandUp = False
leftHandUp = False

def filterHand(hands):
    return sum(hands) / len(hands)
    
    
def getHands(debug = False):
    global leftHands, rightHands, rightHandUp, leftHandUp
    response = getSkeletonFromWebCam()
    
    leftHandResponse = leftHandRaised(response)
    if leftHandResponse != 0:
        leftHands.append(leftHandResponse)
        leftHands = leftHands[1:]
    
    rightHandResponse = rightHandRaised(response)
    if rightHandResponse != 0:
        rightHands.append(rightHandResponse)
        rightHands = rightHands[1:]    
    
    if filterHand(rightHands) > 0.5:
        if not rightHandUp:
            if debug:
                print(Colour.green + "RIGHT hand raised!")
            rightHandUp = True
    elif filterHand(rightHands) < -0.5:
        if rightHandUp:
            if debug:
                print(Colour.blue + "RIGHT hand lowered")
            rightHandUp = False            
        
    if filterHand(leftHands) > 0.5:
        if not leftHandUp:
            if debug:
                print(Colour.yellow + "LEFT hand raised!")
            leftHandUp = True        
    elif filterHand(leftHands) < -0.5:
        if leftHandUp:
            if debug:
                print(Colour.brown + "LEFT hand lowered!")
            leftHandUp = False  
            
    finalPoseScore = 0
    if leftHandUp:
        finalPoseScore += 1
    if rightHandUp:
        finalPoseScore += 2
        
    return finalPoseScore

poses = [   [0.0,    0, "https://i.imgur.com/AyVObiG.png"], 
            [0.080,  0, "https://i.imgur.com/AyVObiG.png"],
            [1.676,  1, "https://i.imgur.com/77JDxe9.png"],
            [3.283,  3, "https://i.imgur.com/hSpp7He.png"],
            [4.097,  2, "https://i.imgur.com/eALijkc.png"],
            [4.869,  0, "https://i.imgur.com/AyVObiG.png"],
            [6.497,  3, "https://i.imgur.com/hSpp7He.png"],
            
            [8.097,  3, "https://i.imgur.com/F3E0rXn.png"],
            [8.483,  3, "https://i.imgur.com/yfxTwfS.png"],
            [8.890,  3, "https://i.imgur.com/F3E0rXn.png"],
            [9.302,  3, "https://i.imgur.com/yfxTwfS.png"],
            
            
            [9.708,  0, "https://i.imgur.com/AyVObiG.png"],
            [10.901,  0, "https://i.imgur.com/AyVObiG.png"],
            ]

label .start_game
stopSound()
fade = 0

while fade < 255:
    clearScreen(fade, fade, fade, 1)
    fade += 0.0125
frame = 0
countDown = 1
timeElapsed()

alpha = 1
while not isKeyReleased('Enter'):
    clearScreen(WHITE)
    drawImage("samples/images/Dance tutorial " + str(frame + 1) + ".png", 15, 100, 300, 300)
    drawText(">> Dance Game <<", 40, 420, "30px Arial", RED)   
    drawText("Copy the pose", 50, 80, "30px Arial", BLUE)   
    drawText("on the screen!", 100, 50, "30px Arial", BLUE)   
    drawText("Press [Enter] to start", 80, 10, "20px Arial", RED)   
    getSkeletonFromWebCam()
    countDown -= timeElapsed()
    if countDown < 0:
        frame = (frame + 1) % 2
        countDown = 1
    fillRect(0, 0, 330, 500, 255, 255, 255, alpha)
    alpha -= 0.075
    if alpha < 0:
        alpha = 0

countDown = 3
countDown -= timeElapsed()
while countDown > 0:
    clearScreen(WHITE)
    drawImage(poses[0][2], 15, 100, 300, 300)
    drawText("Get Ready!!", 90, 420, "30px Arial", BLUE)
    drawText(int((countDown // 1) + 1), 100, 120, "200px Arial", RED)
    refresh()
    getSkeletonFromWebCam()
    countDown -= timeElapsed()


playSound("https://csinschools.io/editor/samples/music/Turbo_Outrun_finish.mp3")
while getSoundCurrentTime() == 0:
    pass


poseIndex = 0
gracePeriod =0.5
progress = 0
progressSpeed = 20
score = 0
maxScore = 0
while True:
    if progress > 255:
        progress = 255
    elif progress < -255:
        progress = -255

    if progress > 0:
        clearScreen(255 - progress, 255, 255 - progress, 1)
    else:
        clearScreen(255, 255 + progress, 255 + progress, 1)
        
    if poseIndex < len(poses) - 1:
        time = getSoundCurrentTime()

        drawImage(poses[poseIndex][2], 15, 100, 300, 300)
        #print(time)
        pose = getHands()
        
        if pose == poses[poseIndex][1]:
            #print(Colour.green + "Got it!")
            progress += progressSpeed
            if progress < 255:
                # don't keep adding score when maxed progress
                score += 1
                maxScore += 1
        else:
            if (time - poses[poseIndex][0]) < gracePeriod:
                pass
                #print(Colour.orange + "<<< Grace backward")  
            #elif (poses[poseIndex + 1][0] - time) < gracePeriod:
            #    print(Colour.orange + "Grace forward >>>")  
            else:
                #print(Colour.red + "Nope!")    
                progress -= progressSpeed
                maxScore += 1
    
        if time > poses[poseIndex + 1][0]:
            poseIndex += 1
            progress = progress / 2
    else:
        break

if progress > 0:
    r = 255 - progress
    g = 255
    b = 255 - progress
else:
    r = 255
    g = 255 + progress
    b = 255 + progress

while True:
    clearScreen(r, g, b, 1)
    r -= 0.0125
    g -= 0.0125
    b -= 0.0125
    
    if r < 0:
        r = 0
    if g < 0:
        g = 0
    if b < 0:
        b = 0
    if r == 0 and g == 0 and b == 0:
        break
    
    
score100 = int(round(score / maxScore, 2) * 100)
while not isKeyReleased('Enter'):
    
    clearScreen(0, 0, 0, 1)
    drawText("Well done!", 100, 340, "30px Arial", WHITE)   
    drawText("Score: " + str(score100), 100, 280, "30px Arial", YELLOW)    
    
    stars = score100 // 20
    starsString = (stars * "★") + ((5 - stars) * "⚝")
    drawText(starsString, 105, 220, "30px Arial", YELLOW)    
    drawText("Press [Enter] to play again!", 50, 10, "20px Arial", WHITE) 
    getSkeletonFromWebCam()
    
    
goto .start_game