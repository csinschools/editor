status = "user_online"

label .menu

if status == "user_offline":
    print("⭕")
elif status == "user_online":
    print("😀")
elif status == "user_away":
    print("😴")
elif status == "user_do_not_disturb":
    print("❌")

print("Change Online Status")
print("[a] Online")
print("[b] Offline")
print("[c] Away")
print("[d] Do Not Disturb")

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