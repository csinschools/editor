# Your amazing code goes here!
from csinsc import printImage

print("Help me design my new look!")
printImage("samples/images/mask.png")
look = input("moustache, beard, or clean shaven?")
if look == "moustache":
    printImage("samples/images/moustache.png")
    print("I'm ready for Movember!")
elif look == "beard":
    printImage("samples/images/beard.png")
    print("I look old don't I?")
elif look == "clean shaven":
    printImage("samples/images/clean.png")
    print("This feels fresh!")
elif look == "goatee":
    printImage("samples/images/goatee.png")
    print("Beeeh-eh-eh")
else:
    print("Sorry, I don't know that look...")
    print("So I think I'll just keep this mask on.")
    printImage("samples/images/mask.png")
