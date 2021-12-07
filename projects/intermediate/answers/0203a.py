# Required for .goto
from csinsc import *

starting_likes = input("Please enter the starting number of likes:")

likes = int(starting_likes)

label .menu
print("Current likes: ")
print(likes)

print("a. for thumbs up")
print("b. for thumbs down")

choice = input("Enter your choice:")

if choice == "a":
  likes = likes + 1
if choice == "b":
  likes = likes - 1
  
goto .menu
