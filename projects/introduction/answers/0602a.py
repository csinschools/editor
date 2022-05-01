# Fill in the blanks below to make a virtual pet.
#
# When the user enters:
#   "1" - the program displays "Munch.. munch.. munch!"
#   "2" - the program displays "Pat.. pat.. pat!"
#   "3" - the program quits

from csinsc import *

label .menu

print("What would you like to do?")
print("1. Feed me")
print("2. Pet me")
print("3. Quit")

choice = input("Make youre choice: ")

if choice == "1":
  print("Munch.. munch.. munch!")
  goto .menu

if choice == "2":
  print("Pat.. pat.. pat!")
  goto .menu

if choice == "3":
  goto .end

print ("Not a valid choice!")
goto .menu

label .end
print("Have a nice day!")
