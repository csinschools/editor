from csinsc import *

# https://www.pinterest.com.au/pin/425379127305166322/

label .play_game
clear()
print(Colour.yellow + r'''
   _.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._
 ,'_.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._`.
( (                                                         ) )
 ) )              What is your Spirit Animal?              ( (
( (               ~~~~~~~~~~~~~~~~~~~~~~~~~~~               ) )
 ) )                                                       ( (
( (_.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._) )
 `._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._,'
''' + Colour.reset)
print("This short quiz will help you identify your spirit animal.")
print()

label .people
answer = input("Do you like being around big groups of people? [y/n]")
if answer == "y":
  goto .weather
if answer == "n":
  goto .morning
print("Invalid answer, please try again.")
goto .people

label .weather
answer = input("Do you like hot weather? [y/n]")
if answer == "y":
  goto .swimmer
if answer == "n":
  goto .bff
print("Invalid answer, please try again.")
goto .weather

label .bff
answer = input("Had the same best friend for more than 3 years? [y/n]")
if answer == "y":
  goto .family
if answer == "n":
  goto .rabbit
print("Invalid answer, please try again.")
goto .bff

label .swimmer
answer = input("Good swimmer? [y/n]")
if answer == "y":
  goto .sing
if answer == "n":
  goto .bff
print("Invalid answer, please try again.")
goto .swimmer

label .family
answer = input("Are you protective of your family? [y/n]")
if answer == "y":
  goto .eater
if answer == "n":
  goto .rabbit
print("Invalid answer, please try again.")
goto .family

label .eater
answer = input("Picky eater? [y/n]")
if answer == "y":
  goto .dolphin
if answer == "n":
  goto .dog
print("Invalid answer, please try again.")
goto .eater

label .sing
answer = input("Like to dance and sing? [y/n]")
if answer == "y":
  goto .flamingo
if answer == "n":
  goto .rabbit
print("Invalid answer, please try again.")
goto .sing

label .morning
answer = input("Bad at waking up in the morning? [y/n]")
if answer == "y":
  goto .games
if answer == "n":
  goto .quiet
print("Invalid answer, please try again.")
goto .morning

label .games
answer = input("Like to play video games? [y/n]")
if answer == "y":
  goto .cat
if answer == "n":
  goto .procrastinate
print("Invalid answer, please try again.")
goto .games

label .quiet
answer = input("Generally a quiet person? [y/n]")
if answer == "y":
  goto .new
if answer == "n":
  goto .wolf
print("Invalid answer, please try again.")
goto .quiet

label .new
answer = input("Enjoy trying new things? [y/n]")
if answer == "y":
  goto .eagle
if answer == "n":
  goto .games
print("Invalid answer, please try again.")
goto .new

label .procrastinate
answer = input("Do you procrastinate work? [y/n]")
if answer == "y":
  goto .turtle
if answer == "n":
  goto .wolf
print("Invalid answer, please try again.")
goto .procrastinate

label .rabbit
print("Your spirit animal is....")
print(Colour.yellow + r'''
               ((`\
            ___ \\ '--._
         .'`   `'    o  )
        /    \   '. __.'
       _|    /_  \ \_\_
jgs   {_\______\-'\__\_\
''' + Colour.reset)
print("A rabbit!")
goto .game_over

label .turtle
print("Your spirit animal is....")
print(Colour.green + r'''
                     .-.-.-._
                   .~\ /~\_/ \.
                 .~\_/~\_/ \_/~\.
               .~\_/ \_/ \_/ \_/~\
    .----.    /\_/ \_/ \_/ \_/ \_/\
   (o)(o)`\_ /_/ \_/ \_/ \_/ \_/ \_\
   |      , |/ \_/ \_/ \_/ \_/ \_/ \\.  _.;
    \ "  /  |\_/ \_/ \_/ \_/ \_/ \_/~\"'_.'
     `--'`--\/_\-/-\_/-\-/ \_/-\_/_\.-""
              /~/"""| |"""""| |'"\~\
   jgs      _/ /   _| |    _| |   \ \
           (___|  (___|   (___|  (___|
''' + Colour.reset)
print("A turtle!")
goto .game_over

label .wolf
print("Your spirit animal is....")
print(Colour.orange + r'''
                        ,     ,
                        |\---/|
                       /  , , |
                  __.-'|  / \ /
         __ ___.-'        ._O|
      .-'  '        :      _/
     / ,    .        .     |
    :  ;    :        :   _/
    |  |   .'     __:   /
    |  :   /'----'| \  |
    \  |\  |      | /| |
     '.'| /       || \ |
     | /|.'       '.l \\_
snd  || ||             '-'
     '-''-'
''' + Colour.reset)
print("A wolf!")
goto .game_over

label .eagle
print("Your spirit animal is....")
print(Colour.yellow + r'''
       .---.        .-----------
      /     \  __  /    ------
     / /     \(  )/    -----
    //////   ' \/ `   ---
   //// / // :    : ---
  // /   /  /`    '--
 //          //..\\
        ====UU====UU====
            '//||\\`
              ''``
          Daron Brewood
''' + Colour.reset)
print("An eagle!")
goto .game_over

label .flamingo
print("Your spirit animal is....")
print(Colour.pink + r'''
    ___
  ,'   `.
 /_. _,. \
( /('   \ :
 \\|    / ;
  `'   / /
      / /
     : :
     | :    _______
     :  \ ,'       `-._
     '   /    .  .  .  \
      : `' ;  ;  ;  ; , :
       \`./  /  /  / ; ;;
        `. `'../__/ / ,.\
           `'-.____;-'`\\\
               \ //   / '|
                ::\
                ||\\
                || \\
                ||  ))
                || //
                ||//
                ||/
                ||
               /||
               `||-
             __,';     SSt
''' + Colour.reset)
print("A flamingo!")
goto .game_over

label .dog
print("Your spirit animal is....")
print(Colour.brown + r'''
    ___
 __/_  `.  .-"""-.
 \_,` | \-'  /   )`-')
  "") `"`    \  ((`"`
 ___Y  ,    .'7 /|
(_,___/...-` (_/_/ sk
''' + Colour.reset)
print("A dog!")
goto .game_over

label .cat
print("Your spirit animal is....")
print(Colour.orange + r'''
       ,
       \`-._           __
        \\  `-..____,.'  `.
         :`.         /    \`.
         :  )       :      : \
          ;'        '   ;  |  :
          )..      .. .:.`.;  :
         /::...  .:::...   ` ;
         ; _ '    __        /:\
         `:o>   /\o_>      ;:. `.
        `-`.__ ;   __..--- /:.   \
        === \_/   ;=====_.':.     ;
         ,/'`--'...`--....        ;
              ;                    ;
            .'                      ;
          .'                        ;
        .'     ..     ,      .       ;
       :       ::..  /      ;::.     |
      /      `.;::.  |       ;:..    ;
     :         |:.   :       ;:.    ;
     :         ::     ;:..   |.    ;
      :       :;      :::....|     |
      /\     ,/ \      ;:::::;     ;
    .:. \:..|    :     ; '.--|     ;
   ::.  :''  `-.,,;     ;'   ;     ;
.-'. _.'\      / `;      \,__:      \
`---'    `----'   ;      /    \,.,,,/
                   `----`              fsc
''' + Colour.reset)
print("A cat!")
goto .game_over

label .dolphin
print("Your spirit animal is....")
print(Colour.cyan + r'''
                               _.-~  )
                    _..--~~~~,'   ,-/     _
                 .-'. . . .'   ,-','    ,' )
               ,'. . . _   ,--~,-'__..-'  ,'
             ,'. . .  (@)' ---~~~~      ,'
            /. . . . '~~             ,-'
           /. . . . .             ,-'
          ; . . . .  - .        ,'
         : . . . .       _     /
        . . . . .          `-.:
       . . . ./  - .          )
      .  . . |  _____..---.._/ _____
~---~~~~----~~~~             ~~

''' + Colour.reset)
print("A dolphin!")
goto .game_over


label .game_over
answer = input("Would you like to take the quiz again? [y/n]")
if answer == "y":
  goto .play_game
print("Goodbye, hope you had fun!")
