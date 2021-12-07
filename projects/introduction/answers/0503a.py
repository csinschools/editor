# Write a program that asks a quiz question, and if the user gets
# it correct, the program displays "Correct!" in green text

from csinsc import *

print("Give this quiz a go!")
print("Question: how amny legs does a goat have?")

answer = input("Answer now: ")

if answer == "4":
    print(Colour.green + "Yay! Correct!" + Colour.reset)

print("Bye now.")
