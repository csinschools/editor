from csinsc import *

label .again

pin = input("Please enter your 2 digit PIN: ")

# Hint : if at first you don't succeed... try, try again!
# Hint 2: ASCII codes
if pin != str(ord('A')):
  print(Colour.red + "Incorrect PIN, please try again." + Colour.reset)
  goto .again

print("Welcome to your bank account, " + Style.bold + Colour.green + "Mr Scrooge McDuck!")
print(Colour.reset + "You currently have " + Colour.yellow + "1,000,000,000" + Colour.reset + " dollars.")