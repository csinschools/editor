status = "user_online"

label .menu

print("Current Status:" + status)
print("Change Online Status")
print("[a] Online")
print("[b] Offline")
print("[c] Away")
print("[d] Do not disturb")

choice = input("What would you like to do?")
if choice == "a":
    status = "user_online"
elif choice == "b":
    status = "user_offline"
elif choice == "c":
    status = "user_away"
elif choice == "d":
    status = "user_do_not_disturb"
else:
    print("Invalid Option")
goto .menu