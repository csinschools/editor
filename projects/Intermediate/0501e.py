keep_guessing = ____

my_height = 160

while keep_guessing == ____:
  print("How tall do you think I am?")
  your_guess = input("Enter your guess (in cm):")

  your_guess = int(your_guess)

  if your_guess ___ my_height:
    print("That's too short!")    
  elif your_guess ___ my_height:
    print("That's too tall!")
  else:
    print("You got it!")
    keep_guessing = False
    
print("Bye now!")
