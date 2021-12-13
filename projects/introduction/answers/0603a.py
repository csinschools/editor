# Write a program that asks the user for a planet
# and then displays a fact about that planet.
# 
# Keep asking for planets until the user types "quit"!

from csinsc import *

label .menu

print("What would you like to do?")
print("1. Earth")
print("2. Mars")
print("3. Quit")

choice = input("Make youre choice: ")

if choice == "1":
  print("Earth is where you live!")
  goto .menu
  
if choice == "2":
  print("Mars is also known as 'the red planet'")
  goto .menu
  
if choice == "3":
  goto .end
  
print ("Not a valid choice!")
goto .menu

label .end
print("Have a nice day!")