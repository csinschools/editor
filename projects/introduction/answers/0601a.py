# Fill in the blanks below to make the easiest game in the world!
# The user should type in "w" to win, and if they don't, they lose!

from csinsc import *

label .again

answer = input("Type 'w' to win: ")
if answer == 'w':
  print("You win!")
  goto .again

print("Game over!")
