from random import *

secret = randint(1, 100)

print("I'm thinking of a number between 1 and 100...")

guess = -1

while guess != secret:
    guess = int(input(WHITE + "Enter your guess:"))
    if guess > secret:
        print(GREEN + "Lower...")
    elif guess < secret:
        print(RED + "Higher")

print(CYAN + "You got it!")
print(RESET + "Bye now!")
