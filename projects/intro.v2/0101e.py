from goodies import *

label .play_game
clear()
print(Colour.yellow + r'''  .----------------------------------------------------.
 /  .-.                                            .-.  \
|  /   \         The Mysterious Quest for         /   \  |
| |\_.  |                                        |    /| |
|\|  | /|           the City of Gold...          |\  | |/|
| `---' |                                        | `---' |
|       |----------------------------------------|       |
 \     /                                          \     /
  `---'                                            `---'
''' + Colour.reset)
print("You are a brave young adventurer looking for the")
print("mysterious hidden city of gold.")
print("You believe it is hidden in this forest somewhere and")
print("after many weeks of exploring, you have discovered a")
print("mysterious looking cave. You walk inside...")
print()
input(Colour.green + "Press [enter] to play " + Colour.reset)

label .cave
clear()
print(Colour.cyan + "You are in a cave." + Colour.reset)
print(Colour.white + r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.grey + "##" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.grey + "#####" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.grey + "########" + Colour.reset + "\_  \._   \`-")
print(r" '     ' '''''''''' '''''''")
print("You can go [" + Colour.cyan + "north" + Colour.reset + "], [" + Colour.cyan + "south" + Colour.reset + "], [" + Colour.cyan + "east" + Colour.reset + "] or [" + Colour.cyan + "west" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "north":
  goto .waterfall
if direction == "south":
  goto .forest
if direction == "east":
  goto .stream
if direction == "west":
  goto .underground
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .cave

label .waterfall
clear()
print(Colour.cyan + "You are underneath a giant waterfall." + Colour.reset)
print(Colour.blue + r'''          ''' + Colour.white +'''~''' + Colour.blue + '''-''' + Colour.white +'''~''' + Colour.blue + '''''' + Colour.cyan +'''`''' + Colour.blue + '''''' + Colour.white +'''~''' + Colour.blue + '''-
        ''' + Colour.white +'''~''' + Colour.blue + '''-''' + Colour.white +'''~''' + Colour.blue + '''-''' + Colour.white +'''~''' + Colour.blue + '''
       !:'
       !!
      ''' + Colour.cyan +'''`''' + Colour.blue + ''':
       !!
     ! :
      :! 
     ! :!
      :'!
     ''' + Colour.cyan +'''`''' + Colour.blue + ''' !:
-''' + Colour.white +'''~''' + Colour.blue + '''''' + Colour.cyan +'''`''' + Colour.blue + '''''' + Colour.white +'''~''' + Colour.blue + '''-''' + Colour.white +'''~''' + Colour.blue + '''''' + Colour.cyan +'''`''' + Colour.blue + ''':!
  ''' + Colour.white +'''~''' + Colour.blue + '''-''' + Colour.white +'''~''' + Colour.blue + '''-''' + Colour.white +'''~''' + Colour.cyan +'''`''' + Colour.blue + '''
''' + Colour.reset)
print("You can go [" + Colour.cyan + "south" + Colour.reset + "] or [" + Colour.cyan + "east" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "south":
  goto .cave
if direction == "east":
  goto .clearing
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .waterfall

label .forest
clear()
print(Colour.cyan + "You are in a dense forest." + Colour.reset)
print(Colour.green +r'''       _-_
    /~~   ~~\
 /~~         ~~\
{               }
 \  _-     -_  /
   ~  ''' + Colour.orange + r'''\\ //  ''' + Colour.green + '''~''' + Colour.orange + r'''
_- -   | | _- _
  _ -  | |   -_
      // \\
''' + Colour.reset)
print("To the south, you can hear some low growling noises.")
print("You can go [" + Colour.cyan + "south" + Colour.reset + "] or [" + Colour.cyan + "north" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "south":
  print(Colour.orange + "You are eaten by some grizzly bears... argh!!")
  goto .game_over
if direction == "north":
  goto .cave
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .forest

label .stream
clear()
print(Colour.cyan + "You are next to a stream of crystal clear water." + Colour.reset)
print(Colour.yellow + r'''          |
        \ _ /
      -= (_) =-
        /   \         
          |    ''' + Colour.cyan + '''
   _____ _ __ __ ____ _ 
 =-=-_-__=_-= _=_=-=_,-'
  =- _=-=- -_=-=_,-"          
    =- =- -=.--"''' + Colour.reset)
print("You can go [" + Colour.cyan + "east" + Colour.reset + "], [" + Colour.cyan + "west" + Colour.reset + "] or [" + Colour.cyan + "north" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "east":
  goto .valley
if direction == "north":
  goto .clearing
if direction == "west":
  goto .cave  
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .stream

label .underground
clear()
print(Colour.cyan + "You are underground. It is very dark here and rather unsafe." + Colour.reset)
print("To the east is the cave from which you came.")
print("You can go [" + Colour.cyan + "north" + Colour.reset + "], [" + Colour.cyan + "south" + Colour.reset + "], [" + Colour.cyan + "east" + Colour.reset + "] or [" + Colour.cyan + "west" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "east":
  goto .cave
print("While you are stumbling along in the dark, you trip and fall down a chasm!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .game_over

label .clearing
clear()
print(Colour.cyan + "You find yourself in a bright forest clearing." + Colour.reset)
print(Colour.green + '''    .-.-.
   (     )
 .-.\ : /.-.
(   .`:`.   )
 (   /|\   )  
  `"` | `"`''' + Colour.reset)
print("You can go [" + Colour.cyan + "north" + Colour.reset + "], [" + Colour.cyan + "south" + Colour.reset + "], [" + Colour.cyan + "east" + Colour.reset + "] or [" + Colour.cyan + "west" + Colour.reset + "].")
direction = input("Where would you like to go:")
if direction == "south":
  goto .stream
if direction == "north":
  goto .hut
if direction == "east":
  goto .hill
if direction == "west":
  goto .waterfall
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .clearing

label .hut
clear()
print(Colour.cyan + "You are outside an old hut. It looks abandoned and run-down." + Colour.reset)
print(r'''
                     /\
                /\  //\\
         /\    //\\///\\\        /\
        //\\  ///\////\\\\  /\  //\\
       /  ^ \/^ ^/^  ^  ^ \/^ \/  ^ \
  /\  / ^   /  ^/ ^ ^ ^   ^\ ^/  ^^  \
 / ^\/ ^ ^   ^ / ^  ^    ^  \/ ^   ^
/^  ^\ ^ ^ ^   ^  ^   ^   ____  ^   ^
\ ^  _\___________________|  |_____^ ^
^\  /______________________________\ ^
^  /________________________________\
^    ||___|___||||||||||||___|__|||
  ^  ||___|___||||||||||||___|__|||
 ^   ||||||||||||||||||||||||||||||ooo
oooooooooooooooooooooooooooooooooooooo
''')
print("Suddenly out of the entrance, a troll charges at you with a giant club!")
direction = input("Hurry!! Where do you go: ")
if direction == "south":
  print("You manage to sprint back the way you came as the troll runs out of breath.")
  input(Colour.green + "Press [enter] to continue. " + Colour.reset)
  goto .clearing
print("You run about aimlessly but the troll catches you and has you for dinner!!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .game_over

label .valley
clear()
print(Colour.cyan + "You stand at the bottom of a deep valley. It is cold in the shadows." + Colour.reset)
print(Colour.yellow + r'''
                             _ ''' + Colour.grey + r'''   
__                          ''' + Colour.yellow + r'''(_)''' + Colour.grey + r'''
XX\
XXX\_                              
XX XX\                          _  
    \ \                       _/X\_
     \ \               __   _/     
__     \\__           /  \_//  _ _ 
\ \_   _//_\___     _/    //       
_\__\_/________\_ _/_____/_________''' + Colour.reset)
print("You can go [" + Colour.cyan + "north" + Colour.reset + "] or [" + Colour.cyan + "west" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "north":
  goto .hill
if direction == "west":
  goto .stream
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .valley

label .hill
clear()
print(Colour.cyan + "You are on top of a hill overlooking a valley."  + Colour.reset)
print(r'''                        .-.
            ^^         /   \
          _        .--'\/\_ \
         / \_    _/ ^      \/
        /    \  /    .'   _/
       /\/\  /\/ :' __  ^/  ^
      /    \/  \  _/  \-' __/
    /\  .-   `. \/     \ / -.
   /  `-.__ ^   / .-'.--'
 @/        `.  / /      `-.
''')
print("You feel a tingle of magic in the air.")
print("Next to you, a shimmering " + Colour.purple + "portal " + Colour.reset + "opens up to the cave that you started in.")
print("You can go [" + Colour.cyan + "south" + Colour.reset + "], [" + Colour.cyan + "west" + Colour.reset + "] or through the [" + Colour.cyan + "portal" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "south":
  goto .valley
if direction == "west":
  goto .clearing
if direction == "through the portal" or direction == "portal":
  goto .magic_cave
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .hill

label .magic_cave
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.orange + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.brown + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.yellow + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.orange + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.yellow + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.yellow + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)

clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.orange + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.orange + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.orange + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.brown + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.brown + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.brown + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.darkGrey + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.darkGrey + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.darkGrey + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)

clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.orange + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.brown + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.yellow + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.orange + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)

clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.orange + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.orange + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.orange + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.brown + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.brown + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.brown + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.darkGrey + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.darkGrey + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.darkGrey + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)


clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.yellow + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.yellow + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.orange + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.brown + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.yellow + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.orange + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.yellow + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.yellow + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.yellow + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)

clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.orange + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.orange + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.orange + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.brown + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.brown + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.brown + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)
clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.darkGrey + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.darkGrey + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.darkGrey + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
sleep(0.15)

clear()
print(Colour.cyan + "You are back in the cave you started in." + Colour.reset)
print(r"        ___..-.")
print(r"     ._/  __ \_`-.__")
print(r"     / .'/"+ Colour.yellow + "~~" + Colour.reset + "\_ `-.  \--.")
print(r"    /.-_/"+ Colour.orange + "~~~~~" + Colour.reset + "\  /-' `\_")
print(r"  /-- /"+ Colour.brown + "~~~~~~~~" + Colour.reset + "\_  \._   \`-")
print(r" '  _/" + Colour.darkGrey + r'''~~~~~~~~~~~''' + Colour .reset + r"\_   '''''''")
print("However, there seems to be a magic staircase leading downwards.")
print("You can go [" + Colour.cyan + "north" + Colour.reset + "], [" + Colour.cyan + "south" + Colour.reset + "], [" + Colour.cyan + "east" + Colour.reset + "], [" + Colour.cyan + "west" + Colour.reset + "] or [" + Colour.cyan + "down" + Colour.reset + "].")
direction = input("Where would you like to go: ")
if direction == "down":
  goto .finish
print("The magic staircase shimmers and then vanishes.")
input(Colour.green + "Press [enter] to continue." + Colour.reset)
if direction == "north":
  goto .waterfall
if direction == "south":
  goto .forest
if direction == "east":
  goto .stream
if direction == "west":
  goto .underground
print("You can't go that way!")
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .cave

label .finish
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.yellow + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.orange + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.brown + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.orange + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.yellow + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.white + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.yellow + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.orange + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.brown + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.orange + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.yellow + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.white + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
clear()
print("You have discovered the magical lost city of gold!")
print(Colour.yellow + r'''                     X_x
                    / \\\
                    |n| |
                  )(|_|-'X
                 /  \\Y// \
                 |A | | |A|
                 |  | | |_|
          )(__X,,|__|MEB;;;-,)(,
         /  \\\;;;;;;;;;;;;/    \
         |A | |            | U  |
       )_|  | |____)-----( |    |
      ///|__|-'////       \|___)=(__X
''' + Colour.reset)
sleep(0.2)
print("You fill your bags and pockets with all the treasures and gold they can hold. You have fulfilled your quest!")
sleep(1.5)
slowPrint("Now, where was that exit again...?", delay = 0.05)
sleep(0.5)
input(Colour.green + "Press [enter] to continue. " + Colour.reset)
goto .game_over

label .game_over
answer = input(Colour.red + "Your adventure is over. Would you like to play again? [y/n] " + Colour.reset)
if answer == "y":
  goto .play_game
print(Colour.green + "Goodbye, we hope you had fun!!")

