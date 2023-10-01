from goodies import *

print("Please enable your microphone and use the " + Colour.cyan + "Chrome" + Colour.reset + " browser.")
input("Press [Enter] to coninue")
print()

mood = listen("How are you today? (speak into the microphone please)")
if mood == "good":
    say("That's great to hear!")
if mood == "bad":
    say("I hope you feel better soon!")
say("I'm feeling " + mood + "too")
