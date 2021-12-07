print("There are 4 doors...")
print(r'''
    .-----.    .-----.    .-----.    .-----.
    |     |    |     |    |     |    |     |
    |  A  |    |  B  |    |  C  |    |  D  |
    |     |    |     |    |     |    |     |
    .-----.    .-----.    .-----.    .-----.
''')

print("Behind 1 of them is a car... if you choose correctly, you win it!!")

door = input("Enter your choice:")

if door == "A":
  print("Sorry, no car behind that one...")
elif door == "B":
  print("Sorry, no car behind that one...")
elif door == "C":
  print("Ding! Ding! Ding! YOU WON THE CAR!")
elif door == "D":
  print("Sorry, no car behind that one...")
else:
  print("There is no such door!")
