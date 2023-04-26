from csinsc import *

colour = "colour_white"
memory = "memory_256"
label .tablet_menu
clear()
print("Your tablet choice:")
if colour == "colour_white":
    printImage("samples/images/tablet_white.png")    
elif colour == "colour_gold":
    printImage("samples/images/tablet_gold.png")        
    
print("Memory size:")
if memory == "memory_256":
    print(Colour.yellow + "256 GB" + Colour.reset)
elif memory == "memory_512":
    print(Colour.cyan + "512 GB" + Colour.reset)
    
print("=== Tablet design menu ===")
print("[1] Select Colour")
print("[2] Select Memory Size")
print("[3] Finalise and get quote")
choice = input("Enter your choice:")
if choice == "1":
    print(Colour.cyan + "   === Choose your colour ===" + Colour.reset)
    print("   [1] White")
    print("   [2] Gold")
    colour_choice = input("   Enter your choice:")
    if colour_choice == "1":
        colour = "colour_white"
    elif colour_choice == "2":
        colour = "colour_gold"
    else:
        print(Colour.red + "   Sorry, invalid option" + Colour.reset)
        input("   Press [Enter] to return to the main menu")
elif choice == "2":
    print(Colour.yellow + "   === Choose your memory size ===" + Colour.reset)
    print("   [1] 256 GB")
    print("   [2] 512 GB")
    memory_choice = input("   Enter your choice:")
    if memory_choice == "1":
        memory = "memory_256"
    elif memory_choice == "2":
        memory = "memory_512"
    else:
        print(Colour.red + "   Sorry, invalid option" + Colour.reset) 
        input("   Press [Enter] to return to the main menu")
elif choice == "3":        
    goto .price
else:
    print(Colour.red + "Sorry, invalid option" + Colour.reset)      
    input("Press [Enter] to return to the main menu")
goto .tablet_menu
label .price
playFreeSoundOrg(47962)
if memory == "memory_256":
    print("Your quote is: " + Colour.green + "$700" + Colour.reset)     
elif memory == "memory_512":
    print("Your quote is: " + Colour.green + "$1000" + Colour.reset)
input("Press [Enter] to exit")
    
    