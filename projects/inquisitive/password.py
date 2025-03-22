# Your amazing code goes here!
from goodies import *

for _ in range(2):
    clear()
    print(Colour.red + Style.bold +        "                     WARNING")
    print(Colour.green + Style.reset +     "               CLASSIFIED LOGIN ONLY")
    sleep(0.5)
    clear()
    print()
    print(Colour.green + Style.reset +     "               CLASSIFIED LOGIN ONLY")    
    sleep(0.5)
    
clear()
print(Colour.red + Style.bold +            "                     WARNING")
print(Colour.green + Style.reset +         "               CLASSIFIED LOGIN ONLY")
print()
slowPrint(Colour.white +                   "Enter the password below: ", delay = 0.05)
password = input()

if password == "1nqu1sItiv3":
    print(Colour.green +                   "Logging in", end = "")
    slowPrint(                                        "...................................")
    sleep(0.5)
    clear()
    for _ in range(2):
        clear()
        print(Colour.yellow + Style.bold + "                    TOP SECRET")
        print(Colour.white + Style.reset + "             Cryptographic Bank Account")
        sleep(0.5)
        clear()
        print()
        print(Colour.white + Style.reset + "             Cryptographic Bank Account") 
        sleep(0.5)    
    clear()
    print(Colour.yellow + Style.bold + "                    TOP SECRET")
    print(Colour.white + Style.reset + "             Cryptographic Bank Account")
    print()
    print("     ", end = "")
    slowPrint(Colour.green +           "Your account balance is: $9,012,186,534.43")

    
else:
   slowPrint(Colour.red +             "INCORRECT. You have been identified as an intruder.", delay = 0.04)
    