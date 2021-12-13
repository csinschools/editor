keep_talking = True

print("Warning: I don't really listen to what you say unless my name, John, is in the sentence.")

while keep_talking == True:
  speech = input("You were saying something? ")

  if "John" in speech:
    print("*Wait*, did you just say my name?")
    keep_talking = False
