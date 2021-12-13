from random import randint

keep_trying = True

while keep_trying == True:
  print("There is a 75%% chance you can pull off this cool dance move!")

  input("Press [enter] to dance!")

  success = randint(0,100)

  print("Success score = " + str(success))

  if success >= 25:
    print("You did the move and the crowd goes wild!")
    keep_trying = False
  else:
    print("You stumbled but keep on trying!")

print("Bye now!")
