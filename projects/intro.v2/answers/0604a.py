label .menu
print("Type '1' to say Hi in Italian")
print("Type '2' to say Hi in French")
print("Type '3' to quit")
choice = input("Enter your choice: ")
if choice == "1":
    print("Ciao!")
    goto .menu
if choice == "2":
    print("Bonjour!")
    goto .menu
if choice == "3":
    quit()
print("Invalid choice, try again!")
goto .menu
