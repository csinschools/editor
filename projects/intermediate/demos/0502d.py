from random import *

keep_rolling = True

while keep_rolling == True:
  print("If you roll a 5 or more, you win!")
  input("Press [ENTER] to roll the dice! ")
  
  dice = randint(1, 6)
  print("You rolled a", dice)

  if dice >= 5:
    print("You beat me!")
    keep_rolling = False
  else:
    print("Keep trying!")

print("Bye now")
