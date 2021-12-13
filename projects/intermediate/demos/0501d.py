guessing = True

my_age = 13

while guessing == True:
  print("How old do you think I am?")
  your_guess = input("Enter your guess: ")

  your_guess = int(your_guess)

  if my_age > your_guess:
    print("I am older than that.")
  elif my_age < your_guess:
    print("I am younger than that.")
  else:
    print("You got it!")
    guessing = False

print("Bye now!")
