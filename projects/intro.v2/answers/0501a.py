# Fill in the blanks below so that IF the user types in 
# "coding", the program displays "Hey, fellow programmer!"

from csinsc import *

subject = input("Enter your favourite subject: ")

if subject == "coding":
  print("Hey, fellow programmer!")
  
print(Colour.red + "A" + Colour.cyan + "r" + Colour.green + "t" + Colour.reset + " is my favourite subject!")
