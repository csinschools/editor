burrow = input("Which burrow would you like to check (1-9):")

burrow_num = int(burrow)

if burrow_num == 1:
  print("You found a rabbit!")
elif burrow_num == 5:
  print("You found a gopher!")
elif burrow_num == 9:
  print("You found the treasure!")
else:
  print("Sorry... just an empty burrow.")
