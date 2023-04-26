# enter your code here
# (hint: you may copy your code from the previous win
# a car exercise and change / add to the code)
from csinsc import printImage

print("There are 4 doors...")
printImage("samples/images/doors.png")

print("Behind 1 of them is a car... if you choose correctly, you win it!!")

door = input("Enter your choice (upper case): ")

if door == "A":
  print("Sorry, no car behind that one...")
  printImage("samples/images/doors_a.png")
elif door == "B":
  print("Sorry, no car behind that one...")
  printImage("samples/images/doors_b.png")
elif door == "C":
  print("Ding! Ding! Ding! YOU WON THE CAR!")
  printImage("samples/images/doors_c.png")
elif door == "D":
  print("Sorry, no car behind that one...")
  printImage("samples/images/doors_d.png")
else:
  print("There is no such door!")
