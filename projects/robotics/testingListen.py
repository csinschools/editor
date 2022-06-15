from csinsc import *
from microbit import *

assistant = Microbit()

while True:
    assistant.waitForButtonPress()
    sleep(1)
    startListen()
    sleep(5)
    text = stopListen()
    
    print("final: " + getFinalTranscript())
    print("interim: " + getInterimTranscript())
    print("text: " + text)

