keep_guessing = True

my_height = 160

while keep_guessing == True:
  print("How tall do you think I am?")
  your_guess = input("Enter your guess (in cm):")

  your_guess = int(your_guess)

  if your_guess < my_height:
    print("That's too short!")    
  elif your_guess > my_height:
    print("That's too tall!")
  else:
    print("You got it!")
    keep_guessing = False
    
print("Bye now!")
