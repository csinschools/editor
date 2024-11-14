# Details and information adapted from here:
# https://www.allaboutlean.com/amazon-fulfillment-2/
from goodies import *

print(">>> The " + Colour.green + "S" + Colour.red + "p" + Colour.yellow + "e" + Colour.grey + "c" + Colour.pink + "i" + Colour.orange + "a" + Colour.cyan + "l" + Colour.reset + " Delivery <<<")
print()
print("A friend of yours who works at the Amazon warehouse has forgotten to retrieve their birthday purchase.")
print()
print("You decide to surprise them by heading down to the warehouse to retrieve the special delivery yourself!")

print(Colour.cyan + r'''                       ______________________________
                      |                              |
             _______  |                              |
            / _____ | |      AMAZON   SUPPLIES       |
           / /(__) || |                              |
  ________/ / |OO| || |                              |
 |         |-------|| |                              |
(|         |     -.|| |                              |
 |  ____   \       ||_|    ____      ____      ____  |
/| / __ \   |______||     / __ \    / __ \    / __ \ |\
\|| /  \ |_______________| /  \ |__| /  \ |__| /  \|_|/
   | () |                 | () |    | () |    | () |
    \__/                   \__/      \__/      \__/ ''' + Colour.reset)
print()
input("Press " + Colour.green + "[Enter] " + Colour.reset + "to start")


label .inbound
clear()
print(">>> You are in the inbound deliveries area. <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ tower D │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ '''+Highlight.green + r'''inbound''' + Colour.reset + r'''  │         │
     └──────────────┴──────────┴─────────┘
''')

print("There is a single truck parked here and ready to unload.")
print("You can head towards the following areas: ")
print("- receive")
location = input("Where would you like to go: ")
if location == "receive":
    goto .receive_area
# secret option, revealed later in game
if location == "truck":
    goto .truck
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .inbound

label .truck
clear()
print("You open the driver's door and climb into the truck...")
print("Inside the glove compartment you find a torn corner of paper with the following written on it: ")
print(Colour.green + "d5" + Colour.reset)
input("Press [Enter] to return to the inbound area")
goto .inbound


label .picktower_a
clear()
print(">>> You are in Picktower A <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   ''' + Highlight.green + r'''tower a''' + Colour.reset + r'''    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("Picktowers are where items are shelved and retrieved according to customer orders.")
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas: ")
print("- receive")
print("- hazmat")
print("- or type in " +  Colour.green + "code" + Colour.reset + " to enter in a code for the package")
location = input("Where would you like to go: ")
if location == "receive":
    goto .receive_area
if location == "hazmat":
    goto .hazmat
if location == "code":
    location = input("What is the code for the package: ")    
    confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
    if confirm == "y":
        goto .miss_ending
    input("Press [Enter] to continue")
    goto .picktower_a        
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .picktower_a

label .picktower_b
clear()
print(">>> You are in Picktower B <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ ''' + Highlight.green + r'''tower b''' + Colour.reset + r''' │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("Picktowers are where items are shelved and retrieved according to customer orders.")     
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas: ")
print("- returns")
print("- packing")
print("- or type in " +  Colour.green + "code" + Colour.reset + " to enter in a code for the package")
location = input("Where would you like to go: ")
if location == "returns":
    goto .returns
if location == "packing":
    goto .packing
if location == "code":
    location = input("What is the code for the package: ")    
    confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
    if confirm == "y":
        goto .miss_ending
    input("Press [Enter] to continue")
    goto .picktower_b        
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .picktower_b

label .picktower_c
clear()
print(">>> You are in Picktower C <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ ''' + Highlight.green + r'''tower c''' + Colour.reset + r''' │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("Picktowers are where items are shelved and retrieved according to customer orders.")     
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas: ")
print("- receive")
print("- or type in " +  Colour.green + "code" + Colour.reset + " to enter in a code for the package")
location = input("Where would you like to go: ")
if location == "receive":
    goto .receive_area
if location == "code":
    location = input("What is the code for the package: ")    
    confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
    if confirm == "y":
        goto .miss_ending
    input("Press [Enter] to continue")
    goto .picktower_c        
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .picktower_c

label .picktower_d
clear()
print(">>> You are in Picktower D <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ ''' + Highlight.green + r'''tower d''' + Colour.reset + r''' │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("Picktowers are where items are shelved and retrieved according to customer orders.")     
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas: ")
print("- packing")
print("- or type in " +  Colour.green + "code" + Colour.reset + " to enter in a code for the package")
location = input("Where would you like to go: ")
if location == "packing":
    goto .packing
if location == "code":
    location = input("What is the code for the package: ")    
    confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
    if confirm == "y":
        goto .check_ending
    input("Press [Enter] to continue")
    goto .picktower_d
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .picktower_d

label .check_ending
clear()
if location == "d5":
    print("You make your back to your friend's house with the item you retrieved.")
    print("It was indeed the item they wanted... a Pikachu plushie toy!")
    print(Colour.yellow + r'''       ,___          .-;'
       `"-.`\_...._/`.`
    ,      \        /
 .-' ',    / ()   ()\
`'._   \  /()    .  (|
    > .' ;,     -'-  /
   / <   |;,     __.;
   '-.'-.|  , \    , \
      `>.|;, \_)    \_)
       `-;     ,    /
          \    /   <
           '. <`'-,_)
            '._)    )''' + Colour.reset)
    
    print("Well done, you were successful!")
    print("THE END")
    goto .end
goto .miss_ending

label .packing
clear()
print(">>> You are in the packing area. <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ ''' + Highlight.green + r'''packing''' + Colour.reset + r'''  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("There are over 100 packing stations here.")
print("Teams of workers take items out of their yellow tote bags,")
print("scans them, packs them into boxes and tapes them up.")
print("They then put the packed items on conveyor belts sent to")
print("the outbound area.")
print()
print("You can head towards the following areas: ")
print("- tower b")
print("- tower d")
print("- outbound")
print("- receive")
location = input("Where would you like to go: ")
if location == "tower b":
    goto .picktower_b
if location == "tower d":
    goto .picktower_d
if location == "outbound":
    goto .outbound  
if location == "receive":
    goto .receive_area      
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .packing

label .hazmat
clear()
print(">>> Hazardous Materials Area. <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  ''' + Highlight.green + r'''hazmat''' + Colour.reset + r''' │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("You are in the hazardous materials area.")
print("You can smell the faint whiff of noxious fumes and there")
print("are hazard signs everywhere.")
print("An serious looking hazmat supervisor is here.")
print("You can head towards the following areas: ")
print("- tower a")
print("- or type " + Colour.green + "'talk'" + Colour.reset + " to talk to the supervisor")
location = input("Where would you like to go: ")
if location == "tower a":
    goto .picktower_a
if location == "talk":
    print("You ask the hazmat supervisor about the special delivery.")
    print("He doesn't know the exact location but knows that the item")
    print("can be found in " + Colour.green + "Tower D " + Colour.reset + ".")    
    input("Press [Enter] to continue")
    goto .hazmat      
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .hazmat

label .outbound
clear()
print(">>> You are in the outbound deliveries area. <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ ''' + Highlight.green + r'''outbound''' + Colour.reset + r''' │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("There is a single truck parked here and ready to deliver.")     
print("You can head towards the following areas: ")
print("- packing")
location = input("Where would you like to go: ")
if location == "packing":
    goto .packing
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .outbound

label .returns
clear()
print(">>> Returns Area <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ ''' + Highlight.green + r'''returns''' + Colour.reset + r''' ┴ tower b │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ receive  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')
print("Boxes and boxes of returned items are stacked here.")
print("A cheerful looking returns officer is cutting open another returned package.")
print("You can head towards the following areas: ")
print("- tower b")
print("- or type " + Colour.green + "'talk'" + Colour.reset + " to talk to the returns officer")
location = input("Where would you like to go: ")
if location == "tower b":
    goto .picktower_b
if location == "talk":
    print("You ask the returns officer about the special delivery.")
    print("She says the inbound truck driver might know.")
    print("His truck is parked in the inbound area and you can")
    print("enter it by typing " + Colour.green + "truck" + Colour.reset + " at the inbound location.")
    input("Press [Enter] to continue")
    goto .returns      
print("Sorry, I don't understand where that is.")  
input("Press [Enter] to continue")
goto .returns

label .miss_ending
clear()
print("You make your back to your friend's house with the item you retrieved.")
print("Unfortunately it was NOT the item they wanted.")
print("AND you've taken someone else's item instead!")
print("Sorry, you were not successful!")
print("THE END")
goto .end

label .receive_area
clear()
print(">>> You are in the receiving area. <<<")
print(r'''┌─────────┬─────────┐          ┌─────────┐
│         │         ├──────────┤         │
│ returns ┴ tower b │ outbound │ tower d │
│         ┬         ├────┤├────┤         │
│         │         ┴          ┴         │
│         │         ┬ packing  ┬         │
└────┬────┼─────────┼────┤├────┼─────────┤
     │    │  hazmat │          │         │
     │    └──┤├─────┤          │         │
     │              ┴ ''' + Highlight.green + r'''receive''' + Colour.reset + r'''  ┴         │
     │   tower a    ┬          ┬ tower c │
     │              ├────┤├────┤         │
     │              │ inbound  │         │
     └──────────────┴──────────┴─────────┘''')

print("Inbound goods are being unpacked and distributed into the different picktowers.")
print("There is a helpful looking woman here.")
print("You can head towards the following areas: ")
print("- tower a")
print("- tower c")
print("- packing")
print("- inbound")
print("- or type " + Colour.green + "'talk'" + Colour.reset + " to talk to the woman")
location = input("Where would you like to go: ")
if location == "tower a":
    goto .picktower_a
if location == "tower c":
    goto .picktower_c
if location == "packing":
    goto .packing  
if location == "inbound":
    goto .inbound      
if location == "talk":
    print("You ask the woman about the special delivery.")
    print("She doesn't know about the exact details but suggests you speak")    
    print("to the " + Colour.green + "hazmat supervisor" + Colour.reset + " and the " + Colour.green + "returns officer " + Colour.reset + ".")    
    input("Press [Enter] to continue")
    goto .receive_area      
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .receive_area

label .end