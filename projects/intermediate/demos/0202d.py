from csinsc import *

print()
print("There are 12 chocolates.")
print("Players take turns taking 1, 2 or 3 chocolates each.")
print("The player who takes the last chocolate in their turn wins, and takes them all!")
print("Can you beat the computer?")
print()

num_chocs = 12

label .again

print("There are", num_chocs, "chocolates left.")

player_takes = input("Enter how many chocolates you'd like to take (1 - 3):")
player_takes = int(player_takes)
if player_takes < 1 or player_takes > 3:
  print("Sorry, you can't take that number of chocolates!")
  goto .again
num_chocs = num_chocs - player_takes

if num_chocs <= 0:
  print("You win!")
  goto .end

computer_takes = 4 - player_takes
print("I'll take", computer_takes, "chocolate(s).")
num_chocs = num_chocs - computer_takes

if num_chocs <= 0:
  print("I win!")
  goto .end

goto .again

label .end
print("Thanks for playing!")

