from csinsc import *

dog = "mode_puppy"

label .menu

clear()

if dog == "mode_puppy":
    printImage("samples/images/doggy1.gif")
elif dog == "mode_grown_up":
    printImage("samples/images/doggy2.png")

print("== Doggy Options ===")
print("[a] Grow to adult")
print("[p] Shrink to puppy")
    
choice = input("Enter your choice:")

if choice == "a":
    dog = "mode_grown_up"
elif choice == "p":
    dog =  "mode_puppy"
else:
    print("Not a valid option!")
    input("Press [Enter] to try again")
goto .menu
