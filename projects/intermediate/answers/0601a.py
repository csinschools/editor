whispering = True

while whispering == True:
  speech = input("whisper what you'd like to say:")

  if speech.islower() == True:
    print("that's interesting....")
  else:
    print("The librarian catches you talking too loudly. Sorry you'll have to leave!")
    whispering = False
