# Your amazing code goes here!
mood = "mood_happy"

label .menu
clear()
print("I am feeling....")
if mood == "mood_happy":
    print("😁")
elif mood == "mood_sad":
    print("😢")
elif mood == "mood_angry":
    print("😡")
elif mood == "mood_tired":
    print("🥱")
    
print("Mood menu")
print("[1] Happy")
print("[2] Sad" )
print("[3] Angry" )
print("[4] Tired" )

response = input("Select your mood:")

if response == "1":
    mood = "mood_happy"
elif response == "2":
    mood = "mood_sad"
elif response == "3":
    mood = "mood_angry"
elif response == "4":
    mood = "mood_tired"
else:
    print("Invalid mood.")
    
input("Press [Enter] to return to the main menu")    
    
goto .menu
    

    
    