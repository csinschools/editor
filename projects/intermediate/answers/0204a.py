# Required for .goto
from csinsc import *

starting_dollars = input("Enter your starting amount ($): ")

dollars = int(starting_dollars)

label .menu
print("Current money:")
print(dollars)

print("Enter [a] to buy a muffin for $10")
print("Enter [b] to buy a coffee for $5")

choice = input("Enter your choice: ")

if choice == "a":
  print("Gobble gobble gobble!")
  dollars = dollars - 10
if choice == "b":
  print("Gulp gulp gulp!")
  dollars = dollars - 5
  
if dollars <= 0:
  print("You've run out of money, sorry!")
  print("Game over.")
  
if dollars > 0:
  goto .menu
