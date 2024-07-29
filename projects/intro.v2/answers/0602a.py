label .menu

print("Type '1' to get the current temperature")
print("Type '2' to get the chance of rain")
print("Type anything else to quit")

option = input("Enter your choice:")

if option  == "1":
    print("It is currently 18 degrees.")
    goto .menu
if option  == "2":
    print("There is a 80% chance of rain.")
    goto .menu

