# Details and information adapted from here:
# https://www.allaboutlean.com/amazon-fulfillment-2/
from csinsc import *

print(">>> The Special Delivery <<<")
print()
print("A friend of yours who works at the Amazon warehouse has forgotten to retrieve their birthday purchase.")
print("You decide to surprise them by heading down to the warehouse to retrieve the special delivery yourself!")

print()
print("Hint: Check out the map of the warehouse on this web page:")
print("   https://www.allaboutlean.com/amazon-fulfillment-2/")
print()
input("Press [Enter] to start")


label .inbound
clear()
print(">>> You are in the inbound deliveries area. <<<")
print("There is a single truck parked here and ready to unload.")
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
    \__/                   \__/      \__/      \__/)''' + Colour.reset)
print("You can head towards the following areas:")
print("- receive")
location = input("Where would you like to go:")
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
print("Inside the glove compartment you find a torn corner of paper with the following written on it:")
print(Colour.green + "d5" + Colour.reset)
input("Press [Enter] to return to the inbound area")
goto .inbound


label .picktower_a
clear()
print(">>> You are in Picktower A <<<")
print("Picktowers are where items are shelved and retrieved according to customer orders.")
print(r'''       _______________  _______________
    .'               .'               .|
  .'               .'               .' |
.'_______________.'______________ .'   |
| ___ _____ ___ || ___ _____ ___ |     |
||_=_|__=__|_=_||||_=_|__=__|_=_||     |
||_____===_____||||_____===_____||     | __________
||_____===_____||||_____===_____||    .'          .'|
||_____===_____||||_____===_____||  .'          .'  |
|_______________||_______________|.'__________.'    |
|.-----___-----.||.-----___-----.||    |_____.--------.
||_____________||||_____________|||  .'      [        |
|.-----___-----.||.-----___-----.||.'        |        |
||             ||||_____________|||==========|        |
||             |||.-----___-----.||    |_____|        |
||             ||||             |||  .'      [        |
||_____________||||_____________|||.'________|________|''')
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas:")
print("- receive")
print("- hazmat")
location = input("Where would you like to go (or enter shelf code to get item):")
if location == "receive":
    goto .receive_area
if location == "hazmat":
    goto .hazmat
confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "?  (y/n)")
if confirm == "y":
    goto .miss_ending
input("Press [Enter] to continue")
goto .picktower_a

label .picktower_b
clear()
print(">>> You are in Picktower B <<<")
print("Picktowers are where items are shelved and retrieved according to customer orders.")
print(r'''       _______________  _______________
    .'               .'               .|
  .'               .'               .' |
.'_______________.'______________ .'   |
| ___ _____ ___ || ___ _____ ___ |     |
||_=_|__=__|_=_||||_=_|__=__|_=_||     |
||_____===_____||||_____===_____||     | __________
||_____===_____||||_____===_____||    .'          .'|
||_____===_____||||_____===_____||  .'          .'  |
|_______________||_______________|.'__________.'    |
|.-----___-----.||.-----___-----.||    |_____.--------.
||_____________||||_____________|||  .'      [        |
|.-----___-----.||.-----___-----.||.'        |        |
||             ||||_____________|||==========|        |
||             |||.-----___-----.||    |_____|        |
||             ||||             |||  .'      [        |
||_____________||||_____________|||.'________|________|''')
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas:")
print("- returns")
print("- packing")
location = input("Where would you like to go (or enter shelf code to get item):")
if location == "returns":
    goto .returns
if location == "packing":
    goto .packing
confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
if confirm == "y":
    goto .miss_ending
input("Press [Enter] to continue")
goto .picktower_b

label .picktower_c
clear()
print(">>> You are in Picktower C <<<")
print("Picktowers are where items are shelved and retrieved according to customer orders.")
print(r'''       _______________  _______________
    .'               .'               .|
  .'               .'               .' |
.'_______________.'______________ .'   |
| ___ _____ ___ || ___ _____ ___ |     |
||_=_|__=__|_=_||||_=_|__=__|_=_||     |
||_____===_____||||_____===_____||     | __________
||_____===_____||||_____===_____||    .'          .'|
||_____===_____||||_____===_____||  .'          .'  |
|_______________||_______________|.'__________.'    |
|.-----___-----.||.-----___-----.||    |_____.--------.
||_____________||||_____________|||  .'      [        |
|.-----___-----.||.-----___-----.||.'        |        |
||             ||||_____________|||==========|        |
||             |||.-----___-----.||    |_____|        |
||             ||||             |||  .'      [        |
||_____________||||_____________|||.'________|________|''')
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas:")
print("- receive")
location = input("Where would you like to go (or enter shelf code to get item):")
if location == "receive":
    goto .receive_area
confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
if confirm == "y":
    goto .miss_ending
input("Press [Enter] to continue")
goto .picktower_c

label .picktower_d
clear()
print(">>> You are in Picktower D <<<")
print("Picktowers are where items are shelved and retrieved according to customer orders.")
print(r'''       _______________  _______________
    .'               .'               .|
  .'               .'               .' |
.'_______________.'______________ .'   |
| ___ _____ ___ || ___ _____ ___ |     |
||_=_|__=__|_=_||||_=_|__=__|_=_||     |
||_____===_____||||_____===_____||     | __________
||_____===_____||||_____===_____||    .'          .'|
||_____===_____||||_____===_____||  .'          .'  |
|_______________||_______________|.'__________.'    |
|.-----___-----.||.-----___-----.||    |_____.--------.
||_____________||||_____________|||  .'      [        |
|.-----___-----.||.-----___-----.||.'        |        |
||             ||||_____________|||==========|        |
||             |||.-----___-----.||    |_____|        |
||             ||||             |||  .'      [        |
||_____________||||_____________|||.'________|________|''')
print("Goods are stacked on rows and rows of shelves here.")
print("If you know the shelf location of the item, type it in and the robotic arm will retrieve it for you.")
print("You can head towards the following areas:")
print("- packing")
location = input("Where would you like to go (or enter shelf code to get item):")
if location == "packing":
    goto .packing
confirm = input(Colour.red + "You only get ONE chance to retrieve an item." + Colour.reset + " Are you sure you would like to retrieve the item at " + Colour.yellow + location + Colour.reset + "? (y/n)")
if confirm == "y":
    goto .check_ending
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
print("There are over 100 packing stations here.")
print("Teams of workers take items out of their yellow tote bags,")
print("scans them, packs them into boxes and tapes them up.")
print("They then put the packed items on conveyor belts sent to")
print("the outbound area.")
print(Colour.grey + r'''  .' '.....................................' '.
.'  .'                                     '.  '.
@'.'                                         '.'@
 \'...........................................'/
  |___________________________________________|''' + Colour.reset)
print("You can head towards the following areas:")
print("- tower b")
print("- tower d")
print("- outbound")
print("- receive")
location = input("Where would you like to go:")
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
print(Colour.red + r'''            _   _
          .-_; ;_-.
         / /     \ \
        | |       | |
         \ \.---./ /
     .-"~   .---.   ~"-.
   ,`.-~/ .'`---`'. \~-.`,
   '`   | | \(_)/ | |   `'
   ,    \  \ | | /  /    ,
   ;`'.,_\  `-'-'  /_,.'`;
    '-._  _.-'^'-._  _.-')''' + Colour.reset)
print("You are in the hazardous materials area.")
print("You can smell the faint whiff of noxious fumes and there")
print("are hazard signs everywhere.")
print("An serious looking hazmat supervisor is here (type " + Colour.green + "'talk'" + Colour.reset + " to talk to him).")
print("You can head towards the following areas:")
print("- tower a")
location = input("Where would you like to go:")
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
print("There is a single truck parked here and ready to deliver.")
print(Colour.orange + r'''                       ______________________________
                      |                              |
             _______  |                              |
            / _____ | |      AMAZON   DELIVERIES     |
           / /(__) || |                              |
  ________/ / |OO| || |                              |
 |         |-------|| |                              |
(|         |     -.|| |                              |
 |  ____   \       ||_|    ____      ____      ____  |
/| / __ \   |______||     / __ \    / __ \    / __ \ |\
\|| /  \ |_______________| /  \ |__| /  \ |__| /  \|_|/
   | () |                 | () |    | () |    | () |
    \__/                   \__/      \__/      \__/)''' + Colour.reset)
print("You can head towards the following areas:")
print("- packing")
location = input("Where would you like to go:")
if location == "packing":
    goto .packing
print("Sorry, I don't understand where that is.")
input("Press [Enter] to continue")
goto .outbound

label .returns
clear()
print(">>> Returns Area <<<")
print(Colour.yellow + r'''      _________________
     |'----------------'-.        
     | ||'-.____'-.'-.____'-.     
     | ||  |      |  |      |     
      '-|  |      |  |      |    
         '-|______|__|______|  ''' + Colour.reset)
print("Boxes and boxes of returned items are stacked here.")
print("A cheerful looking returns officer is cutting open another returned package.")
print("(type " + Colour.green + "'talk'" + Colour.reset + " to talk to her).")
print("You can head towards the following areas:")
print("- tower b")
location = input("Where would you like to go:")
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
print("Inbound goods are being unpacked and distributed into the different picktowers.")
print("There is a helpful looking woman here (type " + Colour.green + "'talk'" + Colour.reset + " to talk to her).")
print("You can head towards the following areas:")
print("- tower a")
print("- tower c")
print("- packing")
print("- inbound")
location = input("Where would you like to go:")
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