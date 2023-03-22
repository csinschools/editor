from csinsc import *

storey = "storey_one"
garage = "garage_no"
label .house_menu
clear()
print("Your dream house:")
if storey == "storey_one":
    printImage("samples/images/one storey.png")    
elif storey == "storey_two":
    printImage("samples/images/two storey.png")        
    
if garage == "garage_yes":
    printImage("samples/images/garage.png")
elif garage == "garage_no":
    printImage("samples/images/no garage.png")
    
print("=== House design menu ===")
print("[1] Choose number of storeys")
print("[2] Garage or no garage?")
print("[3] Finalise and get quote")
choice = input("Enter your choice:")
if choice == "1":
    print("=== Storeys Design ===")
    print("[1] 1 Storey")
    print("[2] 2 Storey")
    storey_choice = input("Enter your choice:")
    if storey_choice == "1":
        storey = "storey_one"
    elif storey_choice == "2":
        storey = "storey_two"
    else:
        print("Sorry, invalid option")
elif choice == "2":
    print("=== Garage Design ===")
    print("[1] No Garage")
    print("[2] Garage")
    garage_choice = input("Enter your choice:")
    if garage_choice == "1":
        garage = "garage_no"
    elif garage_choice == "2":
        garage = "garage_yes"
    else:
        print("Sorry, invalid option")    
elif choice == "3":        
    goto .quote
else:
    print("Sorry, invalid option")        
goto .house_menu
label .quote
if storey == "storey_one":
    if garage == "garage_no":
        print("Your quote for a 1 storey house with no garage is:")
        slowPrint("$1,000,000")
    elif garage == "garage_yes":
        print("Your quote for a 1 storey house with a garage is:")
        slowPrint("$1,100,000")        
elif storey == "storey_two":
    if garage == "garage_no":
        print("Your quote for a 2 storey house with no garage is:")
        slowPrint("$1,500,000")
    elif garage == "garage_yes":
        print("Your quote for a 2 storey house with a garage is:")
        slowPrint("$1,600,000")   
print("Bye now!")
    
    