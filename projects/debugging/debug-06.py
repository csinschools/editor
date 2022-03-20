# This code has 1 SYNTAX ERROR, 1 EXCEPTION AND 1 LOGIC ERROR. Can you find them?

from csinsc import *

label .start

print(Colour.reset)
answer = input("What is the capital of Australia? ")

if answer == "Canberra":
    print(Colour.green "Correct!") # 🐞

if answer != "canberra":
    print(colour.red + "Wrong! Try again!")
    goto .start

print(Colour + reset) # 🐞
print("Thanks for playing! See ya later!")
