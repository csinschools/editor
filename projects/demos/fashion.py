from goodies import *


head = "samples/images/clothing/fashionhead_006.png"
body = "samples/images/clothing/fashionbody_001.png"
legs = "samples/images/clothing/fashionlegs_006.png"
feet = "samples/images/clothing/fashionfeet_006.png"

label .menu
clear()
print("Hurry, you're late for work at the fancy restaurant!")
print("Get dressed and goooooo!")
printImage(head)
printImage(body)
printImage(legs)
printImage(feet)

print("1. Change head")
print("2. Change top")
print("3. Change bottoms")
print("4. Change shoes")
print("5. " + Colour.green + ">> Turn up to work! <<" + Colour.reset)

choice = input("Enter your choice:")
if choice == "1":
    label .head_menu
    clear()
    print(Colour.cyan + "Heads Menu")
    print(              "==========" + Colour.reset)
    print("Please choose the new image you'd like to use:")
    print("   1:")
    printImage("samples/images/clothing/fashionhead_006.png")
    print("   2:")
    printImage("samples/images/clothing/fashionhead_001.png")
    print("   3:")
    printImage("samples/images/clothing/fashionhead_007.png") 
    choice = input("Enter your choice:")
    if choice == "1":
        head = "samples/images/clothing/fashionhead_006.png"
    elif choice == "2":
        head = "samples/images/clothing/fashionhead_001.png"
    elif choice == "3":
        head = "samples/images/clothing/fashionhead_007.png"
    else:
        print("Invalid choice, please try again.")
        input("Press [Enter] to coninue")
        goto .head_menu
elif choice == "2":
    label .top_menu
    clear()
    print(Colour.cyan + "Tops Menu")
    print(              "=========" + Colour.reset)
    print("Please choose the new image you'd like to use:")
    print("   1:")
    printImage("samples/images/clothing/fashionbody_011.png")
    print("   2:")
    printImage("samples/images/clothing/fashionbody_009.png")
    print("   3:")
    printImage("samples/images/clothing/fashionbody_001.png") 
    choice = input("Enter your choice:")
    if choice == "1":
        body = "samples/images/clothing/fashionbody_011.png"
    elif choice == "2":
        body = "samples/images/clothing/fashionbody_009.png"
    elif choice == "3":
        body = "samples/images/clothing/fashionbody_001.png"
    else:
        print("Invalid choice, please try again.")
        input("Press [Enter] to coninue")
        goto .top_menu     
elif choice == "3":
    label .bottoms_menu
    clear()
    print(Colour.cyan + "Bottoms Menu")
    print(              "============" + Colour.reset)
    print("Please choose the new image you'd like to use:")
    print("   1:")
    printImage("samples/images/clothing/fashionlegs_005.png")
    print("   2:")
    printImage("samples/images/clothing/fashionlegs_006.png")
    print("   3:")
    printImage("samples/images/clothing/fashionlegs_009.png") 
    choice = input("Enter your choice:")
    if choice == "1":
        legs = "samples/images/clothing/fashionlegs_005.png"
    elif choice == "2":
        legs = "samples/images/clothing/fashionlegs_006.png"
    elif choice == "3":
        legs = "samples/images/clothing/fashionlegs_009.png"
    else:
        print("Invalid choice, please try again.")
        input("Press [Enter] to coninue")
        goto .bottoms_menu 
elif choice == "4":
    label .shoes_menu
    clear()
    print(Colour.cyan + "Shoes Menu")
    print(              "==========" + Colour.reset)
    print("Please choose the new image you'd like to use:")
    print("   1:")
    printImage("samples/images/clothing/fashionfeet_009.png")
    print("   2:")
    printImage("samples/images/clothing/fashionfeet_006.png")
    print("   3:")
    printImage("samples/images/clothing/fashionfeet_007.png") 
    choice = input("Enter your choice:")
    if choice == "1":
        feet = "samples/images/clothing/fashionfeet_009.png"
    elif choice == "2":
        feet = "samples/images/clothing/fashionfeet_006.png"
    elif choice == "3":
        feet = "samples/images/clothing/fashionfeet_007.png"
    else:
        print("Invalid choice, please try again.")
        input("Press [Enter] to coninue")
        goto .shoes_menu         
elif choice == "5":
    dress = "bad"
    if body == "samples/images/clothing/fashionbody_009.png":
        if legs == "samples/images/clothing/fashionlegs_005.png":
            if feet == "samples/images/clothing/fashionfeet_007.png":
                dress = "good"
    slowPrint(Colour.yellow + "Your boss meets you at the door...")
    if dress == "good":
        print(Colour.green + "'Perfect work uniform! Now go on in!'")
    else:
        print(Colour.red + "'LATE and in totally unprofessional attire... you're fired!'")
    sleep(1)
    goto .end
else:
    print("Invalid choice, please try again.")
    input("Press [Enter] to coninue")
    goto .menu
    
goto .menu

label .end
print(Colour.reset + "Game over")