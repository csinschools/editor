# Your amazing code goes here!
# Your amazing code goes here!
from csinsc import printImage

bodypart_count = {"fashion" : 
                    {"head" : 10, "body": 12, "legs": 11, "feet":10},
                  "knight" :
                    {"head" : 10, "body": 5, "legs": 5, "feet":5}}
                    
bodypart_index = {"fashion" : 
                    {"head" : 0, "body": 0, "legs": 0, "feet":0},
                  "knight" :
                    {"head" : 0, "body": 0, "legs": 0, "feet":0}}                    
                    

imgset_index = 0

imgset = "knight"

label .show
clear()

files = []
for bodypart in bodypart_index[imgset]:
    img = "samples/images/clothing/" + imgset + bodypart + "_" + ("00" + str(bodypart_index[imgset][bodypart] + 1))[-3:] + ".png"
    printImage(img)
    files.append(img)

for file in files:
    print(file)

print("[a] to cycle head")
print("[b] to cycle body")
print("[c] to cycle legs")
print("[d] to cycle feet")
print("[e] to cycle set")

choice = input("Enter choice:")
if choice == "a":
    bodypart = "head"
elif choice == "b":
    bodypart = "body"
elif choice == "c":
    bodypart = "legs"
elif choice == "d":
    bodypart = "feet"
elif choice == "e":
    if imgset == "knight":
        imgset = "fashion"
    else:
        imgset = "knight"
    # reset indices
    bodypart_index = {"fashion" : 
                        {"head" : 0, "body": 0, "legs": 0, "feet":0},
                      "knight" :
                        {"head" : 0, "body": 0, "legs": 0, "feet":0}}          
        
else:
    print("Invalid choice!")  
    goto .show
bodypart_index[imgset][bodypart] = (bodypart_index[imgset][bodypart] + 1) % bodypart_count[imgset][bodypart]
goto .show