from random import *

guessing = True

success = randint(1,100)

while guessing == True:
    your_guess = input("Guess: ")
    your_guess = int(your_guess)

    if your_guess < success:
        print("Higher...")
    elif your_guess > success:
        print("Lower...")
    else: 
        print("You got it!")
        guessing = False

print("Bye now!")
