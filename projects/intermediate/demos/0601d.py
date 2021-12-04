keep_talking = True

while keep_talking == True:
  speech = input("♫♪♫ Sorry it's so loud here, what did you just say? ")

  if speech.isupper() == True:
    print("Ah right, I finally heard you, thanks for SHOUTING!")
    keep_talking = False
