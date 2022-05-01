# Write a program that asks a quiz question, and if the user gets
# it correct, the program displays "Correct!" in green text

from csinsc import *

print("Question: how many legs does a goat have?")

answer = input("Enter your answer: ")

if answer == "4":
    print(Colour.green + "Correct! Yay!" + Colour.reset)

print("Bye now!")
