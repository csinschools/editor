# Fill in the blanks below to make a virtual pet.
# When the user enters:
#   "1" - the program displays "Munch.. munch.. munch!"
#   "2" - the program dispalys "Pat.. pat.. pat!"
#   "3" - the prgram quits

from csinsc import *

label _____

print("What would you like to do?")

# Create your menu here!

choice = input( _____ )

if _____ == "1":
  print("Munch.. munch.. munch!")
  goto _____
  
if _____ == "2":
  print("Pat.. pat.. pat!")
  __________
  
if _____ == ___:
  goto .end
  
print ("Not a valid choice!")
goto _____

label .end
print("Have a nice day!")
