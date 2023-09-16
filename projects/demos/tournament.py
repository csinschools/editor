#etafsiugdfkdjhfljghsdljfghsldhfgjshdlfg
from csinsc import * #colours
from random import randint #random integers 

label .start
print("Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
print(Colour.orange + "               ___________")
print(Colour.yellow + "              '._==_==_=_.'")
print(Colour.yellow + "              .-\:      /-. ")
print(Colour.yellow + "             | (|:.     |) | ")
print(Colour.yellow + "              '-|:.     |-' ")
print(Colour.yellow + "                \::.    / ")
print(Colour.yellow + "                 '::. .' ")
print(Colour.yellow + "                   ) ( ")
print(Colour.orange + "                 _.' '._ ")
print(Colour.orange + "         jgs     -------       "")
print(Colour.white + "")

name = input(Colour.white + "What is your name?: ")
clear()
print("Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
print(Colour.orange + "               ___________")
print(Colour.yellow + "              '._==_==_=_.'")
print(Colour.yellow + "              .-\:      /-. ")
print(Colour.yellow + "             | (|:.     |) | ")
print(Colour.yellow + "              '-|:.     |-' ")
print(Colour.yellow + "                \::.    / ")
print(Colour.yellow + "                 '::. .' ")
print(Colour.yellow + "                   ) ( ")
print(Colour.orange + "                 _.' '._ ")
print(Colour.orange + "         jgs     -------       "")
print(Colour.white + "")
print("Hello " + Colour.red + name + Colour.white + ", please select your " + Colour.red + "class" + Colour.white + ".")
sleep(2)
clear()
print(Colour.white + "Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
print(Colour.orange + "               ___________")
print(Colour.yellow + "              '._==_==_=_.'")
print(Colour.yellow + "              .-\:      /-. ")
print(Colour.yellow + "             | (|:.     |) | ")
print(Colour.yellow + "              '-|:.     |-' ")
print(Colour.yellow + "                \::.    / ")
print(Colour.yellow + "                 '::. .' ")
print(Colour.yellow + "                   ) ( ")
print(Colour.orange + "                 _.' '._ ")
print(Colour.orange + "         jgs     -------       "")
print(Colour.white + "")
label .choosejob
clear()
print(Colour.white + "Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
print(Colour.orange + "               ___________")
print(Colour.yellow + "              '._==_==_=_.'")
print(Colour.yellow + "              .-\:      /-. ")
print(Colour.yellow + "             | (|:.     |) | ")
print(Colour.yellow + "              '-|:.     |-' ")
print(Colour.yellow + "                \::.    / ")
print(Colour.yellow + "                 '::. .' ")
print(Colour.yellow + "                   ) ( ")
print(Colour.orange + "                 _.' '._ ")
print(Colour.orange + "         jgs     -------       "")
print(Colour.white + "")
print(Colour.red + "You" + Colour.white + " have 3 options. Fighter" + Colour.red + " [a]" + Colour.white + ", Swordsman" + Colour.red + " [b]" + Colour.white + " and Mage" + Colour.red + " [c]" + Colour.white + ".")
job = input("Which do " + Colour.red + "you" + Colour.white + " choose?: ")
#JOBS JOBS JOBS
if job == "a":
    job = 1
    jobmessage = (Colour.red + " the Fighter" + Colour.white + "")
    clear()
    print(Colour.white + "Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
    print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
    print(Colour.orange + "               ___________")
    print(Colour.yellow + "              '._==_==_=_.'")
    print(Colour.yellow + "              .-\:      /-. ")
    print(Colour.yellow + "             | (|:.     |) | ")
    print(Colour.yellow + "              '-|:.     |-' ")
    print(Colour.yellow + "                \::.    / ")
    print(Colour.yellow + "                 '::. .' ")
    print(Colour.yellow + "                   ) ( ")
    print(Colour.orange + "                 _.' '._ ")
    print(Colour.orange + "         jgs     -------       "")
    print(Colour.white + "")
elif job == "b":
    job = 2
    jobmessage = (Colour.red + " the Swordsman" + Colour.white + "")
    clear()
    print(Colour.white + "Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
    print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
    print(Colour.orange + "               ___________")
    print(Colour.yellow + "              '._==_==_=_.'")
    print(Colour.yellow + "              .-\:      /-. ")
    print(Colour.yellow + "             | (|:.     |) | ")
    print(Colour.yellow + "              '-|:.     |-' ")
    print(Colour.yellow + "                \::.    / ")
    print(Colour.yellow + "                 '::. .' ")
    print(Colour.yellow + "                   ) ( ")
    print(Colour.orange + "                 _.' '._ ")
    print(Colour.orange + "         jgs     -------       "")
    print(Colour.white + "")
elif job == "c":
    job = 3
    jobmessage = (Colour.red + " the Mage" + Colour.white + "")
    clear() 
    print(Colour.white + "Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!") 
    print(Colour.white + "You will battle other contestants to win the " + Colour.magenta + "Trophy of Awesomeness" + Colour.white + "!")
    print(Colour.orange + "               ___________")
    print(Colour.yellow + "              '._==_==_=_.'")
    print(Colour.yellow + "              .-\:      /-. ")
    print(Colour.yellow + "             | (|:.     |) | ")
    print(Colour.yellow + "              '-|:.     |-' ")
    print(Colour.yellow + "                \::.    / ")
    print(Colour.yellow + "                 '::. .' ")
    print(Colour.yellow + "                   ) ( ")
    print(Colour.orange + "                 _.' '._ ")
    print(Colour.orange + "         jgs     -------       "")
    print(Colour.white + "")
else:
    print(Colour.red + "That is not a valid option!")
    sleep(1)
    goto .choosejob
input("Welcome " + Colour.red + name + jobmessage + Colour.white + ", click " + Colour.red + "[ENTER] " + Colour.white + "to begin!: ")
clear()

label .thefirstfight
print(Colour.blue + "Announcer: " + Colour.white + "Welcome to the " + Colour.magenta + "Tournament of Awesomeness" + Colour.white + "!")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.white + "There will be three fights in total.")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.white + "Whoever wins all their fights becomes...")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.white + "... " + Colour.white + "the" + Colour.magenta + " Champion of Awesomeness" + Colour.white + "!")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.red + name + jobmessage + Colour.white + ", your first battle will be against" + Colour.yellow + " Joe the Alien!")
sleep(2)
input(Colour.white +"Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
label .joeentry
joehp = 50
clear()
print(Colour.yellow + "Joe the Alien" + Colour.white + " steps out on to the arena with the crowd cheering.")
print("")
print(Colour.orange + "           (o)    (o)")
print(Colour.yellow + "             \    /")
print(Colour.yellow + "    /\        \  /")
print(Colour.yellow + "    ||        ----         " + Colour.white + "HP = " + Colour.red + str(joehp))
print(Colour.yellow + "    ||       /(o) |")
print(Colour.yellow + "    ||      (  <   )")
print(Colour.yellow + "    ||       \ -- /")
print(Colour.yellow + " /|_||_|\__(--====--)")
print(Colour.yellow + "    (|_______\======/\ \[[/")
print(Colour.yellow + "    ||        (--) \ \/ /")
print(Colour.yellow + "              /  \  \_-/")
print(Colour.yellow + "             |====|       ")
print(Colour.yellow + "            (  /\  )")
print(Colour.yellow + "            |  )(  |")
print(Colour.yellow + "            [  ][  ]")
print(Colour.magenta + "            _||  ||_")
print(Colour.green + "           (   ][   )")
print("")
sleep(2)
input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to begin the battle: ")
    
    #stats
keepfighting = True
hp = 100
energy = 100
if hp > 100:
    hp = 100
    #enemystats
joehp = 50
potions = 3
    #fightjoe#fight joe fight fight fight fight fight fight fight cow cow cow cow cow cow cow
label .fightjoe
#testthedodgdehellomyfriendings
dodge = randint(1,2)
dodgeselect = randint(1,2)
if hp <= 0:
    clear()
    keepfighting = False
    input(Colour.red + "You" + Colour.white + " lost! Click [" + Colour.red + "ENTER" + Colour.white + "] to see the crowd's reaction: ")
    clear()
    print(Colour.blue + "Announcer: " + Colour.yellow + "Joe the Alien" + Colour.white + " has, as expected, taken down " + Colour.red + name + jobmessage + Colour.white + "! ")
    print("")
    sleep(2)
    print(Colour.white + "The crowd cheers for " + Colour.yellow + "Joe the Alien" + Colour.white + " as " + Colour.red + "you" + Colour.white + " slowly fade into unconciousness.")
    sleep(2)
    input(Colour.white + "Click" + Colour.white + " [" + Colour.red + "ENTER" + Colour.white + "] to retry! ")
    goto .joeentry

if joehp <= 0:
    keepfighting = False
    clear()
    print(Colour.yellow + "Joe the Alien:" + Colour.white + " Noo! I have been beaten!")
    sleep(2)
    print(Colour.yellow + "Joe the Alien: " + Colour.white + "Oh well. I guess I will teach you a few moves.")
    sleep(2)
    input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
    clear()
    #THE METERO PNCHES SETUPID S METOSEITSO IRPSKCIPSADF ALFGDS KICK BOB IN THE BUM
    print(Colour.red + "You" + Colour.white + " unlocked two new attacks from " + Colour.yellow + "Joe the Alien" + Colour.white + ".")
    sleep(2)
    if job == 1:
        print(Colour.red + "Meteor Punch" + Colour.white + " and" + Colour.blue + " Planet Kick" + Colour.white + "!")
    if job == 2:
        print(Colour.red + "Flame Slash" + Colour.white + " and" + Colour.blue + " Hurricane" + Colour.white + "!")
    if job == 3:
        print(Colour.red + "Dragon Fireball" + Colour.white + " and" + Colour.blue + " Mega Tornado" + Colour.white + "!")
    sleep(2)
    #hello my friendings you will unlock one final attack forthe last battle the final the last battle the final hello my frirneidngs.
    print(Colour.white + "You will unlock one last attack for the final battle.")
    sleep(2)
    input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue.")
    clear()
    print(Colour.blue + "Announcer:" + Colour.white + " Unbelievable! The famous " + Colour.yellow + "Joe the Alien" + Colour.white + "...")
    sleep(2)
    print(Colour.blue + "Announcer:" + Colour.white + " has been defeated in battle!")
    sleep(2)
    print(Colour.white + "")
    print("The crowd cheers your name.")
    sleep(2)
    print(Colour.red + name + Colour.white + ", " + Colour.red + name + Colour.white + ", " + Colour.red + name + Colour.white + "!!!")
    print("")
    sleep(2)
    print(Colour.blue + "Announcer:" + Colour.white + " Congratulations on your victory " + Colour.red + name + jobmessage + Colour.white +  "!")
    sleep(2)
    print(Colour.blue + "Announcer:" + Colour.white + " Your next battle with be against " + Colour.orange + "Sir Bob" + Colour.white + "!")
    sleep(2)
    input("Press " + Colour.red + "[ENTER]" + Colour.white + " to continue: ")
    goto .bobentry
    
if hp > 100:
    hp = 100
if energy > 100:
    energy = 100
    
energytojoe = randint(15,20)
damagetojoe = randint(10,15)
damagetoplayer = randint(10,15)
joespecialdamage = randint(15,20)

if joehp >= 25:
    message = ("is looking confident.")
elif joehp <=25:
    message = ("is looking worried.")

clear()
print(Colour.yellow + "Joe the Alien " + Colour.white + str(message))
print("")
print(Colour.orange + "           (o)    (o)")
print(Colour.yellow + "             \    /")
print(Colour.yellow + "    /\        \  /")
print(Colour.yellow + "    ||        ----         " + Colour.white + "HP = " + Colour.red + str(joehp))
print(Colour.yellow + "    ||       /(o) |")
print(Colour.yellow + "    ||      (  <   )")
print(Colour.yellow + "    ||       \ -- /")
print(Colour.yellow + " /|_||_|\__(--====--)")
print(Colour.yellow + "    (|_______\======/\ \[[/")
print(Colour.yellow + "    ||        (--) \ \/ /")
print(Colour.yellow + "              /  \  \_-/")
print(Colour.yellow + "             |====|       ")
print(Colour.yellow + "            (  /\  )")
print(Colour.yellow + "            |  )(  |")
print(Colour.yellow + "            [  ][  ]")
print(Colour.magenta + "            _||  ||_")
print(Colour.green + "           (   ][   )")
print("")
print(Colour.green + "HP = " + str(hp))
print(Colour.blue + "ENERGY = " + str(energy))
print(Colour.red + "POTIONS = " + str(potions))
print("")
#jobs selection moves
if job == 1:
    print(Colour.red + "a. Punch [-5 energy]")
    print(Colour.blue + "b. Kick [-5 energy]")
    print(Colour.green + "c. Energy Beam [-20 energy]")
    print(Colour.yellow + "d. Heal [+15 HP]")
    print(Colour.magenta + "e. Recharge Energy [+15 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
elif job == 2: 
    print(Colour.red + "a. Slash [-5 energy]")
    print(Colour.blue + "b. Whirlwind [-5 energy]")
    print(Colour.green + "c. Swords Combo [-20 energy]")
    print(Colour.yellow + "d. Heal [+15 HP]")
    print(Colour.magenta + "e. Recharge Energy [+15 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
elif job == 3: 
    print(Colour.red + "a. Fireball [-5 energy]")
    print(Colour.blue + "b. Tornado [-5 energy]")
    print(Colour.green + "c. Thunderstorm [-20 energy]")
    print(Colour.yellow + "d. Heal [+15 HP]")
    print(Colour.magenta + "e. Recharge Energy [+15 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")    

if attack =="a":
    print("")
    if energy > 4:
        if job == 1:
            print(Colour.white + "You punch " + Colour.yellow + "Joe the Alien " + Colour.white + "in the face for " + Colour.green + str(damagetojoe) + Colour.white + " damage!")
            joehp = joehp - damagetojoe
            energy = energy - 5
            print(Colour.red + " ")
            print("      _    ,-,    _")
            print("  ,--, /: :\/': :`\/: :|")
            print("  |`;  ' `,'   `.;    `: |")
            print(" |    |     |  '  |     |.")
            print(" | :  |     | pb  |     ||")
            print(" | :. |  :  |  :  |  :  | |")
            print("  \__/: :.. : :.. | :.. |  )")
            print("       `---',\___/,\___/ /'")
            print("             `==._ .. . /'")
            print("                  `-::-'")
            print(" ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
        #swor
        if job == 2:
            print(Colour.white + "You slash " + Colour.yellow + "Joe the Alien" + Colour.white + " with your sword for " + Colour.green + str(damagetojoe) + Colour.white + " damage!")
            joehp = joehp - damagetojoe
            energy = energy - 5
            print(Colour.red + " ")
            print(" ")
            print("          />_________________________________")
            print(" [########[]_________________________________>")
            print("          \>")
            print(" ")
            print(Colour.white + " ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
        #magic
        if job == 3:
            print(Colour.white + "You charge up a fireball and shoot it at " + Colour.yellow + "Joe the Alien" + Colour.white + " for " + Colour.green + str(damagetojoe) + Colour.white + " damage!")
            joehp = joehp - damagetojoe
            energy = energy - 5
            print(Colour.red + " ")
            print("           |")
            print("           |   .")
            print("    `.  *  |     .'")
            print("      `. ._|_* .'  .")
            print("    . * .'   `.  *")
            print(" -------|     |-------")
            print("    .  *`.___.' *  .")
            print("       .'  |* `.  *")
            print("     .' *  |  . `.")
            print("         . |")
            print("           | jgs")
            print(" ")
            print(Colour.white + " ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
    elif energy < 5:
        print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
        
elif attack == "b":
    print("")
    if energy > 4:
        if job == 1:
            print(Colour.white + "You kick" + Colour.yellow + " Joe the Alien " + Colour.white + "from behind for " + Colour.green + str(damagetojoe) + Colour.white + " damage!")
            joehp = joehp - damagetojoe
            energy = energy - 5
            print(Colour.blue + " ")
            print("     ,___ ,__")
            print("      )  `\  `|")
            print("     (   _ '-._'-._")
            print(" jgs  )_( \____)___)")
            print(" ")
            print(" ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
        if job == 2:
            #sword
            print(Colour.white + "You spin around with your sword and hit " + Colour.yellow + "Joe the Alien" + Colour.white + " for " + Colour.green + str(damagetojoe) + Colour.white + " damage!")
            joehp = joehp - damagetojoe
            energy = energy - 5
            print(Colour.blue + " ")
            print(" ")
            print("          />_________________________________")
            print(" [########[]_________________________________>")
            print("          \>")
            print(" ")
            print(" ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
            #mage
        if job == 3:
            print(Colour.white + "You create a small tornado of wind and send it at " + Colour.yellow + "Joe the Alien" + Colour.white + " for " + Colour.green + str(damagetojoe) + Colour.white + " damage!")
            joehp = joehp - damagetojoe
            energy = energy - 5
            print(Colour.blue + " ")
            print(" --_-_-_-_---")
            print("    -_-_-_")
            print("     -_-_-")
            print("       -__-")
            print("      _-_")
            print("     _-")
            print("     -_")
            print("      _-_")
            print(" ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "brandishes his sword and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
    elif energy < 5:
        print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    
elif attack == "c":
    print("")
    if energy > 19:
        if job == 1:
            print(Colour.white + "You fire an " + Colour.green + "energy beam " + Colour.white + "at " + Colour.yellow + "Joe the Alien" + Colour.white + " for " + Colour.green + str(energytojoe) + Colour.white + " damage!")
            joehp = joehp - energytojoe
            energy = energy - 20
            print(Colour.green + "")
            print("_________________________________________")
            print("           -                  -          ")
            print("      -             -                    ")
            print("  -          -                -          ")
            print("_________________________________________")
            print(" ")
            print(" ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "does a jumping attack and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
        if job == 2:
            print(Colour.white + "You get ready and unleash all your attacks at once at " + Colour.yellow + "Joe the Alien" + Colour.white + " for " + Colour.green + str(energytojoe) + Colour.white + " damage!")
            joehp = joehp - energytojoe
            energy = energy - 20
            print(Colour.green + " ")
            print(" ")
            print("          />_________________________________")
            print(" [########[]_________________________________>")
            print("          \>")
            print(" ")
            print("                      />_________________________________")
            print("             [########[]_________________________________>")
            print("                      \>")
            print(" ")
            print("          />_________________________________")
            print(" [########[]_________________________________>")
            print("          \>")
            print(" ")
            print(" ")
            print(Colour.white + " ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "does a jumping attack and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
        if job == 3:
            print(Colour.white + "You summon a lightning cloud and strike " + Colour.yellow + "Joe the Alien" + Colour.white + " for " + Colour.green + str(energytojoe) + Colour.white + " damage!")
            print(Colour.green + "")
            joehp = joehp - energytojoe
            energy = energy - 20
            print("      _, .--.")
            print("     (  / (  '-.")
            print(" jgs .-=-.    ) -.")
            print("    /   (  .' .   |")
            print("    \ ( ' ,_) ) \_/")
            print("     (_ , /\  ,_/")
            print("       '--\ `\--`")
            print("          _\ _|")
            print("          `\ |")
            print("           _\_|")
            print("           `||")
            print("             ||")
            print("         -.'.`\.'.-")
            print(" ")
            sleep(1)
            print(Colour.yellow + "Joe the Alien " + Colour.white + "does a jumping attack and attacks you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
            hp = hp - damagetoplayer
            print(Colour.yellow + " ")
            print("       /| ________________")
            print(" O|===|* >________________>")
            print("       \|")
            print(" ")
            print(" ")
            print(Colour.white + " ")
    elif energy < 20:
        print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    
    
elif attack == "d":
    print("")
    if potions > 0:
        if hp < 100:
            print(Colour.white + "You drink a pinkish red potion and heal for" + Colour.green + " +15" + Colour.white + " HP.")
            hp = hp + 15
            potions = potions - 1
            print(Colour.magenta + " ")
            print("     _____")
            print("    `.___,'")
            print("     (___)")
            print("     <   > ")
            print("      ) (")
            print("     /`-.\ ")
            print("    /     |")
            print("   / " + Colour.red + "_    _" + Colour.magenta + "|")
            print("  :" + Colour.red +",' `-.' `" + Colour.magenta +":")
            print(Colour.magenta + "  |         |")
            print("  :         ;")
            print("   \       /")
            print("    `.___.' SSt")
            print(" ")
            sleep(1)
            if joehp > 30:
                print(Colour.yellow + "Joe the Alien " + Colour.white + "looks bored.")
            if joehp < 30:
                print(Colour.yellow + "Joe the Alien " + Colour.white + "looks worried now.")
    elif hp > 100:
         hp = 100
    elif hp >= 100:
        print(Colour.white + "You cannot heal, you have full " + Colour.red + "HP!")
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    elif potions == 0:
        print(Colour.white + "You cannot heal, you are out of " + Colour.magenta + "potions!")
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    if keepfighting == True:
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
#energy system
elif attack == "e":
    print("")
    if energy < 100:
        print(Colour.white + "You recharge " + Colour.blue + "+15 " + Colour.white + "energy.")
        energy = energy + 15
        sleep(1)
        print(Colour.yellow + "Joe the Alien " + Colour.white + "takes this chance to attack you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
        hp = hp - damagetoplayer
        print(Colour.yellow + " ")
        print("       /| ________________")
        print(" O|===|* >________________>")
        print("       \|")
        print(" ")
        print(" ")
        print(Colour.white + " ")
    elif energy > 100:
        energy = 100
    elif energy >= 100:
        print("You have full energy!")
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .fightjoe

else:
    print(Colour.red + "That is not a valid option!")
    sleep(1)
    goto .fightjoe
    
#THE BOB BATTLE
label .bobentry
if joehp <= 0:
    clear()
    bobhp = 150
    hp = 100
    energy = 100
    potions = 3
    keepfighting = True
    print(Colour.orange + "Sir Bob " + Colour.white + "steps out on the arena. The crowd goes crazy, cheering his name.")
    sleep(2)
    print(Colour.white + "You can't lose to " + Colour.red + name + jobmessage + Colour.white + ", " + Colour.orange + "Sir Bob" + Colour.white + "! says a fan in the crowd.")
    sleep(2)
    print(Colour.orange + "Sir Bob" + Colour.white + " waves at his fans and focuses on " + Colour.red + "you" + Colour.white + ".")
    sleep(2)
    input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
    clear()
    
print(Colour.orange + "Sir Bob" + Colour.white + " walks out on to the arena. The crowd goes wild.")
print(Colour.orange + "")
print("   ,   A           " + Colour.red + "{}")
print(Colour.orange + "  / \, | ,        .--.")
print(" |    =|= >      /.--.|")
print("  \ /` | `       |====|")
print("   `   |         |`::`|           " + Colour.white + "HP = " + Colour.red + str(bobhp))
print(Colour.orange + "       |     .-;`\..../`;-.")
print("      /\|/  /  |...::...|  |")
print("      |:'\ |   /'''::'''\   |")
print("       \ /\;-,/\   ::   /\--;")
print("       |\ <` >  >._::_.<,<__>")
print("       | `""`  /   ^^   \|  |")
print("       |       |        |\::/")
print("       |       |        |/|||")
print("       |       |___/\___| '''")
print("       |        \_ || _/")
print("       |        <_ >< _>")
print("       |        |  ||  |")
print("       |        |  ||  |")
print("       |       " + Colour.orange + "_\.:||:./_")
print(Colour.orange + "       | jgs  "+ Colour.orange + "/____/\____|")
print(Colour.white + " ")
sleep(2)
input(Colour.white + "Click " + Colour.red + "[ENTER]" + Colour.white + " to begin the battle: ")
goto .bobfight
if joehp > 0:
    goto .fightjoe
#PLAYERSTATS FOR BOB BATTLE
hp = 100
energy = 100
potions = 3

keepfighting = True
if hp > 100:
    hp = 100
    #enemystats
bobhp = 125    #fightjoe

label .bobfight #THE BOB FIGHT OMG

if hp <= 0:
    clear()
    keepfighting = False
    input(Colour.red + "You" + Colour.white + " lost! Click [" + Colour.red + "ENTER" + Colour.white + "] to see the crowd's reaction: ")
    clear()
    print(Colour.blue + "Announcer: " + Colour.orange + "Sir Bob" + Colour.white + " has, as expected, taken down " + Colour.red + name + jobmessage + Colour.white + "! ")
    print("")
    sleep(2)
    print(Colour.white + "The crowd cheers for " + Colour.orange + "Sir Bob" + Colour.white + " as " + Colour.red + "you" + Colour.white + " slowly fade into unconciousness.")
    sleep(2)
    input(Colour.white + "Click" + Colour.white + " [" + Colour.red + "ENTER" + Colour.white + "] to retry! ")
    goto .bobentry

if bobhp >= 50:
    message = ("is ready for battle.")
elif bobhp <= 50:
    message = ("stands his ground.")

if hp > 100:
    hp = 100
if energy > 100:
    energy = 100
    
if bobhp <= 0:
    keepfighting = False
    goto .dragonfight

clear()
print(Colour.orange + "Sir Bob " + Colour.white + str(message))
print(Colour.orange + "")
print("   ,   A           " + Colour.red + "{}")
print(Colour.orange + "  / \, | ,        .--.")
print(" |    =|= >      /.--.|")
print("  \ /` | `       |====|")
print("   `   |         |`::`|           " + Colour.white + "HP = " + Colour.red + str(bobhp))
print(Colour.orange + "       |     .-;`\..../`;-.")
print("      /\|/  /  |...::...|  |")
print("      |:'\ |   /'''::'''\   |")
print("       \ /\;-,/\   ::   /\--;")
print("       |\ <` >  >._::_.<,<__>")
print("       | `""`  /   ^^   \|  |")
print("       |       |        |\::/")
print("       |       |        |/|||")
print("       |       |___/\___| '''")
print("       |        \_ || _/")
print("       |        <_ >< _>")
print("       |        |  ||  |")
print("       |        |  ||  |")
print("       |       " + Colour.orange + "_\.:||:./_")
print(Colour.orange + "       | jgs  " + Colour.orange + "/____/\____|")
print(Colour.white + " ")
#damage
energytobob = randint(30,35)
damagetobob = randint(25,30)
damagetoplayer = randint(10,15)
bobspecialdamage = randint(15,20)
#shield system 
bobshield = randint(1,3)

if job == 1:
    print(Colour.green + "HP = " + str(hp))
    print(Colour.blue + "ENERGY = " + str(energy))
    print(Colour.red + "POTIONS = " + str(potions))
    print("")
    print(Colour.red + "a. Meteor Punch [-10 energy]")
    print(Colour.blue + "b. Planet Kick [-10 energy]")
    print(Colour.green + "c. Energy Beam [-20 energy]")
    print(Colour.yellow + "d. Heal [+15 HP]")
    print(Colour.magenta + "e. Recharge Energy [+15 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
if job == 2:
    print(Colour.green + "HP = " + str(hp))
    print(Colour.blue + "ENERGY = " + str(energy))
    print(Colour.red + "POTIONS = " + str(potions))
    print("")
    print(Colour.red + "a. Flame Slash [-10 energy]")
    print(Colour.blue + "b. Hurricane [-10 energy]")
    print(Colour.green + "c. Swords Combo [-20 energy]")
    print(Colour.yellow + "d. Heal [+15 HP]")
    print(Colour.magenta + "e. Recharge Energy [+15 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
if job == 3:
    print(Colour.green + "HP = " + str(hp))
    print(Colour.blue + "ENERGY = " + str(energy))
    print(Colour.red + "POTIONS = " + str(potions))
    print("")
    print(Colour.red + "a. Dragon Fireball [-10 energy]")
    print(Colour.blue + "b. Mega Tornado [-10 energy]")
    print(Colour.green + "c. Thunderstorm [-20 energy]")
    print(Colour.yellow + "d. Heal [+15 HP]")
    print(Colour.magenta + "e. Recharge Energy [+15 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")

if attack =="a":
    if bobshield > 1:
        print("")
        if energy > 9:
            if job == 1:
                print(Colour.white + "You throw an explosive punch at " + Colour.orange + " Sir Bob" + Colour.white +" for " + Colour.green + str(damagetobob) + Colour.white + " damage!")
                bobhp = bobhp - damagetobob
                energy = energy - 10
                print(Colour.red + " ")
                print(Colour.red + "      _    ,-,    _")
                print(Colour.orange + "  ,--, /: :\/': :`\/: :|")
                print(Colour.yellow + "  |`;  ' `,'   `.;    `: |")
                print(Colour.orange + " |    |     |  '  |     |.")
                print(Colour.red + " | :  |     | pb  |     ||")
                print(Colour.orange + " | :. |  :  |  :  |  :  | |")
                print(Colour.yellow + "  \__/: :.. : :.. | :.. |  )")
                print(Colour.orange + "       `---',\___/,\___/ /'")
                print(Colour.red + "             `==._ .. . /'")
                print(Colour.orange + "                  `-::-'")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
            if job == 2: #swords My friending hello my firrndings guhd ifugshsd ljh gowH GUDHFAIG 
                print(Colour.white + "You swing your sword covered in hot flames at " + Colour.orange + " Sir Bob" + Colour.white +" for " + Colour.green + str(damagetobob) + Colour.white + " damage!")
                bobhp = bobhp - damagetobob
                energy = energy - 10
                print(Colour.red + " ")
                print(" ")
                print("          />_____________" + Colour.orange + "____________" + Colour.yellow + "________")
                print(Colour.orange + " [########" + Colour.yellow + "[]" + Colour.red + "__________" + Colour.orange + "______________" + Colour.yellow + "_________" + Colour.red + ">")
                print(Colour.red + "          \>")
                print(" ")
                print(Colour.white + "")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
            if job == 3:
                print(Colour.white + "You charge up a huge fireball with the power of a dragon and shoot it at " + Colour.orange + "Sir Bob" + Colour.white + " for " + Colour.green + str(damagetobob) + Colour.white + " damage!")
                bobhp = bobhp - damagetobob
                energy = energy - 5
                print(Colour.red + " ")
                print(Colour.red + "           |")
                print(Colour.orange + "           |   .")
                print(Colour.yellow + "    `.  *  |     .'")
                print(Colour.orange + "      `. ._|_* .'  .")
                print(Colour.red + "    . * .'   `.  *")
                print(Colour.orange + " -------|     |-------")
                print(Colour.yellow + "    .  *`.___.' *  .")
                print(Colour.orange + "       .'  |* `.  *")
                print(Colour.red + "     .' *  |  . `.")
                print(Colour.orange + "         . |")
                print(Colour.yellow + "           | jgs")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
                
                
    elif bobshield == 1:
        print("")
        print(Colour.orange + "Sir Bob " + Colour.white + "blocked your attack with his shield!")
        print(Colour.orange + "")
        print(Colour.orange + "")
        print(Colour.orange + "   |`-._/\_.-`|")
        print(Colour.orange + "   |    ||    |")
        print(Colour.orange + "   |___o()o___|")
        print(Colour.orange + "   |__((<>))__|")
        print(Colour.orange + "   \   o\/o   /")
        print(Colour.orange + "    \   ||   /")
        print(Colour.orange + "     \  ||  /")
        print(Colour.orange + " jgs  '.||.'")
        print(Colour.orange + "        ``")
        print(Colour.white + "")
        print(" ")
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    elif energy < 10:
        print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
        
elif attack == "b":
    if bobshield > 1:
        print("")
        if energy > 9:
            if job == 1:
                print(Colour.white + "You kick hard enough to smash concrete and deal " + Colour.green + str(damagetobob) + Colour.white + " damage!")
                bobhp = bobhp - damagetobob
                energy = energy - 10
                print(Colour.blue + " ")
                print(Colour.green + "     ,___ ,__")
                print(Colour.blue + "      )  `\  `|")
                print(Colour.green + "     (   _ '-._'-._")
                print(Colour.blue + " jgs  )_( \____)___)")
                print(" ")
                print(" ")
                sleep(1)
                print(Colour.orange + "Sir Bob " + Colour.white + "swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
            if job == 2:
                print(Colour.white + "You spin around so fast you become a blur and hit " + Colour.orange + " Sir Bob" + Colour.white +" for " + Colour.green + str(damagetobob) + Colour.white + " damage!")
                bobhp = bobhp - damagetobob
                energy = energy - 10
                print(Colour.blue + " ")
                print(" ")
                print(Colour.purple + "          />_________________________________")
                print(Colour.green + " [########[]" + Colour.blue + "_________________________________>")
                print(Colour.blue + "          \>")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
                #sword spin
            if job == 3:
                print(Colour.white + "You summon a massive raging tornado and send it at " + Colour.orange + "Sir Bob" + Colour.white + " for " + Colour.green + str(damagetobob) + Colour.white + " damage!")
                print(Colour.blue + "")
                bobhp = bobhp - damagetobob
                energy = energy - 5
                print(" ")
                print("                . '@(@@@@@@@)@. (@@) `  .   '")
                print("      .  @@'((@@@@@@@@@@@)@@@@@)@@@@@@@)@ ")
                print("      @@(@@@@@@@@@@))@@@@@@@@@@@@@@@@)@@` .")
                print("   @.((@@@@@@@)(@@@@@@@@@@@@@@))@\@@@@@@@@@)@@@  .")
                print("  (@@@@@@@@@@@@@@@@@@)@@@@@@@@@@@||@@)@@@@@@@@)")
                print(" (@@@@@@@@)@@@@@@@@@@@@@(@@@@@@@@//@@@@@@@@@) ` ")
                print("  .@(@@@@)##&&&&&(@@@@@@@@)::_=(@||@@@@)@@ .   .'")
                print("    @@`(@@)###&&&&&!!;;;;;;::-_=@@||@)@`@.")
                print("    `   @@(@###&&&&!!;;;;;::-=_=@.@||@@     '")
                print("       `  @.#####&&&!!;;;::=-_= .@  ||")
                print("             ####&&&!!;;::=_-        `")
                print("              ###&&!!;;:-_=")
                print("               ##&&!;::_=")
                print("              ##&&!;:=")
                print("             ##&&!:-")
                print("            #&!;:-")
                print("           #&!;=")
                print("           #&!-")
                print("            #&=")
                print("    jgs      #&-")
                print("             ||#/'")
                print(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
                print(" ")
                sleep(1)
                print(Colour.orange + "Sir Bob " + Colour.white + "swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
                #mage tornado
                
                
    elif bobshield == 1:
        print("")
        print(Colour.orange + "Sir Bob " + Colour.white + "blocked your attack with his shield!")
        print(Colour.orange + "")
        print(Colour.orange + "")
        print(Colour.orange + "   |`-._/\_.-`|")
        print(Colour.orange + "   |    ||    |")
        print(Colour.orange + "   |___o()o___|")
        print(Colour.orange + "   |__((<>))__|")
        print(Colour.orange + "   \   o\/o   /")
        print(Colour.orange + "    \   ||   /")
        print(Colour.orange + "     \  ||  /")
        print(Colour.orange + " jgs  '.||.'")
        print(Colour.orange + "        ``")
        print(Colour.white + "")
        print(" ")
    elif energy < 9:
        print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    
elif attack == "c":
    if bobshield > 1:
        print("")
        if energy > 19:
            if job == 1:
                print(Colour.white + "You fire an " + Colour.green + "energy beam " + Colour.white + "at " + Colour.orange + "Sir Bob " + Colour.white + "for " + Colour.green + str(energytobob) + Colour.white + " damage!")
                bobhp = bobhp - energytobob
                energy = energy - 20
                print(Colour.green + "")
                print("_________________________________________")
                print("           -                  -          ")
                print("      -             -                    ")
                print("  -          -                -          ")
                print("_________________________________________")
                print(" ")
                print(" ")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
            if job == 2:
                print(Colour.white + "You get ready and unleash all your attacks at once at " + Colour.orange + "Sir Bob" + Colour.white + " for " + Colour.green + str(energytobob) + Colour.white + " damage!")
                bobhp = bobhp - energytobob
                energy = energy - 20
                print(Colour.green + " ")
                print(" ")
                print("          />_________________________________")
                print(" [########[]_________________________________>")
                print("          \>")
                print(" ")
                print("                      />_________________________________")
                print("             [########[]_________________________________>")
                print("                      \>")
                print(" ")
                print("          />_________________________________")
                print(" [########[]_________________________________>")
                print("          \>")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
            if job == 3:
                print(Colour.white + "You summon a lightning cloud and strike " + Colour.orange + "Sir Bob" + Colour.white + " for " + Colour.green + str(energytobob) + Colour.white + " damage!")
                print(Colour.green + "")
                bobhp = bobhp - energytobob
                energy = energy - 20
                print("      _, .--.")
                print("     (  / (  '-.")
                print(" jgs .-=-.    ) -.")
                print("    /   (  .' .   |")
                print("    \ ( ' ,_) ) \_/")
                print("     (_ , /\  ,_/")
                print("       '--\ `\--`")
                print("          _\ _|")
                print("          `\ |")
                print("           _\_|")
                print("           `||")
                print("             ||")
                print("         -.'.`\.'.-")
                print(" ")
                sleep(1)
                print(Colour.orange + "Sir Bob" + Colour.white + " swings his axe at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(Colour.orange + " ")
                print(" ")
                print("     , /\ .  ")
                print("   //`-||-'|| ")
                print("  (| -=||=- |)")
                print("   ||,-||-.// ")
                print("    `  ||  '  ")
                print("       ||   ")
                print("       ||     ")
                print("       ||")
                print("       ||     ")
                print("       || ")
                print("  hjm  ()")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
                sleep(1)
                input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
                goto .bobfight
    elif bobshield == 1:
        print("")
        print(Colour.orange + "Sir Bob " + Colour.white + "blocked your attack with his shield!")
        print(Colour.orange + "")
        print(Colour.orange + "")
        print(Colour.orange + "   |`-._/\_.-`|")
        print(Colour.orange + "   |    ||    |")
        print(Colour.orange + "   |___o()o___|")
        print(Colour.orange + "   |__((<>))__|")
        print(Colour.orange + "   \   o\/o   /")
        print(Colour.orange + "    \   ||   /")
        print(Colour.orange + "     \  ||  /")
        print(Colour.orange + " jgs  '.||.'")
        print(Colour.orange + "        ``")
        print(Colour.white + "")
        print(" ")
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    elif energy < 20:
        print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
    if keepfighting == True:
        sleep(2)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    
elif attack == "d":
    print("")
    if potions > 0:
        if hp < 100:
            print(Colour.white + "You drink a pinkish red potion and heal for" + Colour.green + " +15" + Colour.white + " HP.")
            hp = hp + 15
            potions = potions - 1
            print(Colour.magenta + " ")
            print("     _____")
            print("    `.___,'")
            print("     (___)")
            print("     <   > ")
            print("      ) (")
            print("     /`-.\ ")
            print("    /     |")
            print("   / " + Colour.red + "_    _" + Colour.magenta + "|")
            print("  :" + Colour.red +",' `-.' `" + Colour.magenta +":")
            print(Colour.magenta + "  |         |")
            print("  :         ;")
            print("   \       /")
            print("    `.___.' SSt")
            print(" ")
            sleep(1)
            if bobhp > 50:
                print(Colour.orange + "Sir Bob " + Colour.white + "looks ready.")
            if bobhp < 50:
                print(Colour.orange + "Sir Bob " + Colour.white + "stands his ground.")
    elif hp > 100:
        hp = 100
    elif hp >= 100:
        print(Colour.white + "You cannot heal, you have full " + Colour.red + "HP!")
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    elif potions == 0:
        print(Colour.white + "You cannot heal, you are out of " + Colour.magenta + "potions!")
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    if keepfighting == True:
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
#energy system
elif attack == "e":
    print("")
    if energy < 100:
        print(Colour.white + "You recharge " + Colour.blue + "+15 " + Colour.white + "energy.")
        energy = energy + 15
        sleep(1)
        print(Colour.orange + "Sir Bob " + Colour.white + "takes this chance to attack you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
        hp = hp - damagetoplayer
        print(Colour.orange + " ")
        print(" ")
        print("     , /\ .  ")
        print("   //`-||-'|| ")
        print("  (| -=||=- |)")
        print("   ||,-||-.// ")
        print("    `  ||  '  ")
        print("       ||   ")
        print("       ||     ")
        print("       ||")
        print("       ||     ")
        print("       || ")
        print("  hjm  ()")
        print(" ")
        print(" ")
        print(Colour.white + " ")
    elif energy > 100:
        energy = 100
    elif energy >= 100:
        print("You have full energy!")
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .bobfight

else:
    print(Colour.red + "That is not a valid option!")
    sleep(1)
    goto .bobfight
    
#FINALSHOWDOWN
label .dragonfight
if bobhp > 0:
    goto .bobfight
if bobhp <= 0:
    clear()
    print(Colour.orange + "Sir Bob:" + Colour.white + " That was a good fight. Take my helmet. You deserve it.")
    sleep(2)
    print(Colour.red + "")
    print("    {}")
    print(Colour.orange + "   .--.")
    print("  /.--.|")
    print("  |====|" + Colour.green + "   +100 HP" + Colour.blue + "  +100 ENERGY")
    print(Colour.orange + "  |`::`|  ")
    print("")
    sleep(2)
    print(Colour.white + "Equipped " + Colour.white + "[" + Colour.orange + "Sir Bob's Helmet" + Colour.white + "]!")
    sleep(2)
    print(Colour.orange + "Sir Bob:" + Colour.white + " And take some extra potions too.")
    sleep(2)
    print(Colour.red + "You" + Colour.white + " obtained [" + Colour.red + "HP POTIONS x2" + Colour.white + "]!")
    sleep(2)
    input("Press " + Colour.red + "[ENTER]" + Colour.white + " to continue: ")
    clear()
    print(Colour.blue + "Announcer: " + Colour.red + name + jobmessage + Colour.white + " has taken down yet another powerful contestant!")
    sleep(2)
    print(Colour.blue + "Announcer: " + Colour.white + "That was completely unexpected! " + Colour.orange + "Sir Bob" + Colour.white + " was a favourite to win!")
    sleep(2)
    print(Colour.blue + "Announcer: " + Colour.red + name + jobmessage + Colour.white + ", your next and final opponent is the " + Colour.magenta + "8 times champion" + Colour.white + ",")
    sleep(2)
    print(Colour.magenta + "THE DRAGON" + Colour.white + "!!!")
    sleep(2)
    input("Press " + Colour.red + "[ENTER]" + Colour.white + " to continue: ")
    clear()
    label .finalflash
    clear()
    print("You unlocked one last attack for the final battle!")
    sleep(2)
    if job == 1:
        print(Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green +"a" + Colour.blue + "l" + Colour.magenta + " E" + Colour.red + "n" + Colour.orange + "e" + Colour.yellow + "r" + Colour.green + "g" + Colour.blue + "y" + Colour.magenta + " B" + Colour.red + "e" + Colour.orange + "a" + Colour.yellow + "m" + Colour.white + "!")
    if job == 2:
        print(Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green + "a" + Colour.blue + "l" + Colour.magenta + " S" + Colour.red + "w" + Colour.orange + "o" + Colour.yellow + "r" + Colour.green + "d" + Colour.blue + "s" + Colour.magenta + " C" + Colour.red + "o" + Colour.orange + "m" + Colour.yellow + "b" + Colour.green + "o" + Colour.white + "!")
    if job == 3:
        print(Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green + "a" + Colour.blue + "l" + Colour.magenta + " T" + Colour.red + "h" + Colour.orange + "u" + Colour.yellow + "n" + Colour.green + "d" + Colour.blue + "e" + Colour.magenta + "r" + Colour.red + "s" + Colour.orange + "t" + Colour.yellow + "o" + Colour.green + "r" + Colour.blue + "m" + Colour.white + "!")
   
    sleep(2)
    input("Press " + Colour.red + "[ENTER]" + Colour.white + " to continue: ")
    clear()
draghp = 500
print(Colour.magenta + "The Dragon" + Colour.white + " flies over the arena. The crowd is terrified.")
print(Colour.magenta + "")
print("    <>=======() ")
print("   (/\___   /|||          ()==========<>_")
print("         \_/ | ||        //|\   ______/ \)")
print("           \_|  ||      // | \_/")
print("             \|\/|\_   //  /\/")
print("              (" + Colour.red +"oo" + Colour.magenta + ")\ \_//  /" + Colour.white + "      HP = " + Colour.red + str(draghp))
print(Colour.magenta + "             //_/\_\/ /  |")
print("            @@/  |=\  \  |")
print("                 \_=\_ \ |")
print("               \==\ \|\_ snd")
print("             __(\===\(  )|")
print("           (((~) __(_/   |")
print("           (((~) \  / ")
print("           ______/ /")
print("           '------'")
print(" ")
print(" ")
sleep(2)
input(Colour.white + "Click " + Colour.red + "[ENTER]" + Colour.white + " to begin the final battle: ")
goto .dragonreal

label .dragonreal
clear()
#PLAYERSTATS FOR BOB BATTLE
hp = 200
energy = 200
potions = 5

keepfighting = True
if hp > 200:
    hp = 200
#enemystats
draghp = 500

label .dragfight#final fight

if hp <= 0:
    clear()
    keepfighting = False
    input(Colour.red + "You" + Colour.white + " lost! Click [" + Colour.red + "ENTER" + Colour.white + "] to see the crowd's reaction: ")
    clear()
    print(Colour.blue + "Announcer: " + Colour.magenta + "The Dragon" + Colour.white + " has taken down " + Colour.red + name + jobmessage + Colour.white + "! ")
    print("")
    sleep(2)
    print(Colour.white + "The crowd cheers for " + Colour.magenta + "The Dragon" + Colour.white + " as " + Colour.red + "you" + Colour.white + " slowly fade into unconciousness.")
    sleep(2)
    input(Colour.white + "Click" + Colour.white + " [" + Colour.red + "ENTER" + Colour.white + "] to retry! ")
    goto .finalflash
    
if draghp >= 200:
    message = ("looks confident.")
elif draghp <=200:
    message = ("is starting to enjoy the fight.")

if hp > 200:
    hp = 200
if energy > 200:
    energy = 200
    
if draghp <= 0:
    keepfighting = False
    goto .theend

clear()
print(Colour.magenta + "The Dragon " + Colour.white + str(message))
print(Colour.magenta + "")
print("    <>=======() ")
print("   (/\___   /|||          ()==========<>_")
print("         \_/ | ||        //|\   ______/ \)")
print("           \_|  ||      // | \_/")
print("             \|\/|\_   //  /\/")
print("              (" + Colour.red +"oo" + Colour.magenta + ")\ \_//  /" + Colour.white + "      HP = " + Colour.red + str(draghp))
print(Colour.magenta + "             //_/\_\/ /  |")
print("            @@/  |=\  \  |")
print("                 \_=\_ \ |")
print("               \==\ \|\_ snd")
print("             __(\===\(  )|")
print("           (((~) __(_/   |")
print("           (((~) \  / ")
print("           ______/ /")
print("           '------'")
print(" ")
print(Colour.white + " ")

#damage
energytodrag = randint(150,175)
damagetodrag = randint(50,60)
damagetoplayer = randint(20,25)
dragspecialdamage = randint(30,35)

#stats for dragon

#THE ABILITIES YOU HAVE
if job == 1:
    print(Colour.green + "HP = " + str(hp))
    print(Colour.blue + "ENERGY = " + str(energy))
    print(Colour.red + "POTIONS = " + str(potions))
    print("")
    print(Colour.red + "a. Meteor Punch [-10 energy]")
    print(Colour.blue + "b. Planet Kick [-10 energy]")
    print(Colour.white + "c. " + Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green +"a" + Colour.blue + "l" + Colour.magenta + " E" + Colour.red + "n" + Colour.orange + "e" + Colour.yellow + "r" + Colour.green + "g" + Colour.blue + "y" + Colour.magenta + " B" + Colour.red + "e" + Colour.orange + "a" + Colour.yellow + "m" + Colour.white + " [-100 energy]")
    print(Colour.yellow + "d. Heal [+30 HP]")
    print(Colour.magenta + "e. Recharge Energy [+30 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
if job == 2:
    print(Colour.green + "HP = " + str(hp))
    print(Colour.blue + "ENERGY = " + str(energy))
    print(Colour.red + "POTIONS = " + str(potions))
    print("")
    print(Colour.red + "a. Flame Slash [-10 energy]")
    print(Colour.blue + "b. Hurricane [-10 energy]")
    print(Colour.white + "c. " + Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green + "a" + Colour.blue + "l" + Colour.magenta + " S" + Colour.red + "w" + Colour.orange + "o" + Colour.yellow + "r" + Colour.green + "d" + Colour.blue + "s" + Colour.magenta + " C" + Colour.red + "o" + Colour.orange + "m" + Colour.yellow + "b" + Colour.green + "o" + Colour.white + " [-100 energy]")
    print(Colour.yellow + "d. Heal [+30 HP]")
    print(Colour.magenta + "e. Recharge Energy [+30 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
if job == 3:
    print(Colour.green + "HP = " + str(hp))
    print(Colour.blue + "ENERGY = " + str(energy))
    print(Colour.red + "POTIONS = " + str(potions))
    print("")
    print(Colour.red + "a. Dragon Fireball [-10 energy]")
    print(Colour.blue + "b. Mega Tornado [-10 energy]")
    print(Colour.white + "c. " + Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green + "a" + Colour.blue + "l" + Colour.magenta + " T" + Colour.red + "h" + Colour.orange + "u" + Colour.yellow + "n" + Colour.green + "d" + Colour.blue + "e" + Colour.magenta + "r" + Colour.red + "s" + Colour.orange + "t" + Colour.yellow + "o" + Colour.green + "r" + Colour.blue + "m" + Colour.white + " [-100 energy]")
    print(Colour.yellow + "d. Heal [+30 HP]")
    print(Colour.magenta + "e. Recharge Energy [+30 ENERGY]")
    print("")
    attack = input(Colour.white + "What do you do? (a/b/c/d/e): ")
    
if attack =="a":
        print("")
        if energy > 9:
            if job == 1:
                print(Colour.white + "You put all your power behind your fist and launch it at " + Colour.magenta + "The Dragon " + Colour.white + "for " + Colour.green + str(damagetodrag) + Colour.white + " damage!")
                draghp = draghp - damagetodrag
                energy = energy - 10
                print(Colour.red + " ")
                print(Colour.red + "      _    ,-,    _")
                print(Colour.orange + "  ,--, /: :\/': :`\/: :|")
                print(Colour.yellow + "  |`;  ' `,'   `.;    `: |")
                print(Colour.orange + " |    |     |  '  |     |.")
                print(Colour.red + " | :  |     | pb  |     ||")
                print(Colour.orange + " | :. |  :  |  :  |  :  | |")
                print(Colour.yellow + "  \__/: :.. : :.. | :.. |  )")
                print(Colour.orange + "       `---',\___/,\___/ /'")
                print(Colour.red + "             `==._ .. . /'")
                print(Colour.orange + "                  `-::-'")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breaths fiery hot flames at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.orange + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.red + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.orange + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.yellow + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.red + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.orange + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.yellow + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.orange + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
            if job == 2:
                #sword
                print(Colour.white + "You swing your sword covered in hot flames at " + Colour.magenta + " The Dragon" + Colour.white +" for " + Colour.green + str(damagetodrag) + Colour.white + " damage!")
                draghp = draghp - damagetodrag
                energy = energy - 10
                print(Colour.red + " ")
                print(" ")
                print("          />_____________" + Colour.orange + "____________" + Colour.yellow + "________")
                print(Colour.orange + " [########" + Colour.yellow + "[]" + Colour.red + "__________" + Colour.orange + "______________" + Colour.yellow + "_________" + Colour.red + ">")
                print(Colour.red + "          \>")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breaths fiery hot flames at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.orange + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.red + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.orange + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.yellow + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.red + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.orange + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.yellow + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.orange + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
            if job == 3:
                #magi magic gmagiamcimfdgsdfg pee pee poo poo i poo i n the toilet
                print(Colour.white + "You charge up a huge fireball with the power of a dragon and shoot it at " + Colour.magenta + "The Dragon" + Colour.white + " for " + Colour.green + str(damagetodrag) + Colour.white + " damage!")
                draghp = draghp - damagetodrag
                energy = energy - 10
                print(Colour.red + " ")
                print(Colour.red + "           |")
                print(Colour.orange + "           |   .")
                print(Colour.yellow + "    `.  *  |     .'")
                print(Colour.orange + "      `. ._|_* .'  .")
                print(Colour.red + "    . * .'   `.  *")
                print(Colour.orange + " -------|     |-------")
                print(Colour.yellow + "    .  *`.___.' *  .")
                print(Colour.orange + "       .'  |* `.  *")
                print(Colour.red + "     .' *  |  . `.")
                print(Colour.orange + "         . |")
                print(Colour.yellow + "           | jgs")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breaths fiery hot flames at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                hp = hp - damagetoplayer
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.orange + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.red + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.orange + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.yellow + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.red + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.orange + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.yellow + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.orange + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
        elif energy < 10:
            print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
            sleep(1)
            input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
            goto .dragfight
        if keepfighting == True:
            sleep(1)
            input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
            goto .dragfight
        
elif attack == "b":
        print("")
        if energy > 9:
            if job == 1:
                print(Colour.white + "You kick hard enough to crush a planet and deal " + Colour.green + str(damagetodrag) + Colour.white + " damage!")
                draghp = draghp - damagetodrag
                energy = energy - 10
                print(Colour.blue + " ")
                print(Colour.green + "     ,___ ,__")
                print(Colour.blue + "      )  `\  `|")
                print(Colour.green + "     (   _ '-._'-._")
                print(Colour.blue + " jgs  )_( \____)___)")
                print(" ")
                print(" ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breaths fiery hot flames at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.orange + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.red + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.orange + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.yellow + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.red + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.orange + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.yellow + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.orange + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
            if job == 2:
                print(Colour.white + "You spin around so fast you become a blur and hit " + Colour.magenta + "The Dragon" + Colour.white +" for " + Colour.green + str(damagetodrag) + Colour.white + " damage!")
                bobhp = bobhp - damagetobob
                energy = energy - 10
                print(Colour.blue + " ")
                print(" ")
                print(Colour.purple + "          />_________________________________")
                print(Colour.green + " [########[]" + Colour.blue + "_________________________________>")
                print(Colour.blue + "          \>")
                print(" ")
                print(Colour.white + " ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breaths fiery hot flames at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.orange + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.red + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.orange + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.yellow + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.red + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.orange + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.yellow + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.orange + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
            if job == 3:
                print(Colour.white + "You summon a massive raging tornado and send it at " + Colour.magenta + "The Dragon" + Colour.white + " for " + Colour.green + str(damagetodrag) + Colour.white + " damage!")
                print(Colour.blue + "")
                draghp = draghp - damagetodrag
                energy = energy - 5
                print(" ")
                print("                . '@(@@@@@@@)@. (@@) `  .   '")
                print("      .  @@'((@@@@@@@@@@@)@@@@@)@@@@@@@)@ ")
                print("      @@(@@@@@@@@@@))@@@@@@@@@@@@@@@@)@@` .")
                print("   @.((@@@@@@@)(@@@@@@@@@@@@@@))@\@@@@@@@@@)@@@  .")
                print("  (@@@@@@@@@@@@@@@@@@)@@@@@@@@@@@||@@)@@@@@@@@)")
                print(" (@@@@@@@@)@@@@@@@@@@@@@(@@@@@@@@//@@@@@@@@@) ` ")
                print("  .@(@@@@)##&&&&&(@@@@@@@@)::_=(@||@@@@)@@ .   .'")
                print("    @@`(@@)###&&&&&!!;;;;;;::-_=@@||@)@`@.")
                print("    `   @@(@###&&&&!!;;;;;::-=_=@.@||@@     '")
                print("       `  @.#####&&&!!;;;::=-_= .@  ||")
                print("             ####&&&!!;;::=_-        `")
                print("              ###&&!!;;:-_=")
                print("               ##&&!;::_=")
                print("              ##&&!;:=")
                print("             ##&&!:-")
                print("            #&!;:-")
                print("           #&!;=")
                print("           #&!-")
                print("            #&=")
                print("    jgs      #&-")
                print("             ||#/'")
                print(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
                print(" ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breaths fiery hot flames at you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.orange + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.red + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.orange + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.yellow + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.red + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.orange + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.yellow + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.orange + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
        elif energy < 9:
            print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
            sleep(1)
            input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
            goto .dragfight
        if keepfighting == True:
            sleep(1)
            input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
            goto .dragfight
    
elif attack == "c":
        print("")
        if energy > 99:
            if job == 1:
                print(Colour.white + "You charge up all your energy and shoot a massive " + Colour.green + "energy beam " + Colour.white + "at " + Colour.magenta + "The Dragon " + Colour.white + "for " + Colour.green + str(energytodrag) + Colour.white + " damage!")
                draghp = draghp - energytodrag
                energy = energy - 100
                print(" ")
                print(Colour.white + "________________________________________________________________________________")
                print(Colour.red + "           -                  -                   -  -          -        -")
                print(Colour.orange + "      -             -       -              -         -   -      -        -")
                print(Colour.yellow + "-      -           -               -            -        -          -            -")
                print(Colour.green + "  -          -                -        -        -       -               -      -")
                print(Colour.blue + "-      -           -               -            -      -              -            ")
                print(Colour.magenta + "-        -             -               -           -         -        -")
                print(Colour.white + "________________________________________________________________________________")
                print(" ")
                print(" ")
                print("(The crowd goes wild!)")
                print(" ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breathes powerful rainbow flames at you for " + Colour.red + str(dragspecialdamage) + Colour.white + " damage!")
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.green + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.blue + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.magenta + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.red + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.yellow + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.green + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.blue + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.magenta + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
            if job == 2:
                print(Colour.white + "You use all your energy and use your " + Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green + "a" + Colour.blue + "l" + Colour.magenta + " S" + Colour.red + "w" + Colour.orange + "o" + Colour.yellow + "r" + Colour.green + "d" + Colour.blue + "s" + Colour.magenta + " C" + Colour.red + "o" + Colour.orange + "m" + Colour.yellow + "b" + Colour.green + "o" + Colour.white + " at " + Colour.magenta + "The Dragon " + Colour.white + "for " + Colour.green + str(energytodrag) + Colour.white + " damage!")
                draghp = draghp - energytodrag
                energy = energy - 100
                print(" ")
                print(Colour.red + "               /)")
                print(Colour.orange + "              //")
                print("     .-------" + Colour.yellow + "| |" + Colour.white + "--------------------------------------------.__")
                print("     |WMWMWMW" + Colour.green + "| |" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>>" + Colour.blue + ">>>" + Colour.magenta + ">>>" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>>" + Colour.blue + ">>>" + Colour.magenta + ">>>" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>" + Colour.white + ":>")
                print("     `-------" + Colour.blue + "| |" + Colour.white + "--------------------------------------------'^^")
                print(Colour.magenta + "              ||")
                print(Colour.red + "              \)")
                print(" ") 
                print(" ") 
                print(Colour.red + "                               /)")
                print(Colour.orange + "                              //")
                print("                     .-------" + Colour.yellow + "| |" + Colour.white + "--------------------------------------------.__")
                print("                     |WMWMWMW" + Colour.green + "| |" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>>" + Colour.blue + ">>>" + Colour.magenta + ">>>" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>>" + Colour.blue + ">>>" + Colour.magenta + ">>>" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>" + Colour.white + ":>")
                print("                     `-------" + Colour.blue + "| |" + Colour.white + "--------------------------------------------'^^")
                print(Colour.magenta + "                              ||")
                print(Colour.red + "                              \)")
                print(" ") 
                print(" ")
                print(Colour.red + "               /)")
                print(Colour.orange + "              //")
                print("     .-------" + Colour.yellow + "| |" + Colour.white + "--------------------------------------------.__")
                print("     |WMWMWMW" + Colour.green + "| |" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>>" + Colour.blue + ">>>" + Colour.magenta + ">>>" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>>" + Colour.blue + ">>>" + Colour.magenta + ">>>" + Colour.red + ">>>" + Colour.orange + ">>>" + Colour.yellow + ">>>" + Colour.green + ">>" + Colour.white + ":>")
                print("     `-------" + Colour.blue + "| |" + Colour.white + "--------------------------------------------'^^")
                print(Colour.magenta + "              ||")
                print(Colour.red + "              \)")
                print(" ")
                print(Colour.whAite + "(The crowd goes wild!)")
                print(" ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breathes powerful rainbow flames at you for " + Colour.red + str(dragspecialdamage) + Colour.white + " damage!")
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.green + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.blue + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.magenta + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.red + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.yellow + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.green + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.blue + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.magenta + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
            if job == 3:
                print(Colour.white + "You use all your energy to summon a huge " + Colour.red + "F" + Colour.orange + "i" + Colour.yellow + "n" + Colour.green + "a" + Colour.blue + "l" + Colour.magenta + " T" + Colour.red + "h" + Colour.orange + "u" + Colour.yellow + "n" + Colour.green + "d" + Colour.blue + "e" + Colour.magenta + "r" + Colour.red + "s" + Colour.orange + "t" + Colour.yellow + "o" + Colour.green + "r" + Colour.blue + "m" + Colour.white + ", covering the entire arena at" + Colour.magenta + " The Dragon" + Colour.white + " for " + Colour.green + str(energytodrag) + Colour.white + " damage!")
                draghp = draghp - energytodrag
                energy = energy - 100
                print(" ")
                print(Colour.white + "     ___(                        )                      ___(                        )")
                print("   (                          _)                      (                          _)")
                print(" (_                       __))                     (_                       __))")
                print("   ((                _____)                          ((                _____)")
                print("       (_________)----'                                  (_________)----'")
                print(Colour.red + "          _/  /                                             _/  /")
                print(Colour.orange + "         /  _/                                             /  _/")
                print(Colour.yellow + "       _/  /                                             _/  /")
                print(Colour.green + "      / __/                                             / __/ ")
                print(Colour.blue + "    _/ /                                              _/ / ")
                print(Colour.magenta + "   /__/                                              /__/")
                print(Colour.red + "  //                                                // ")
                print(Colour.orange + " /'                                                /' ")
                print(Colour.white + "                   ________________________")
                print("               ___(                        )")
                print("             (                          _)")
                print("           (_                       __))")
                print("             ((                _____)")
                print("                 (_________)----'")
                print(Colour.red + "                    _/  /")
                print(Colour.orange + "                   /  _/")
                print(Colour.yellow + "                _/  /")
                print(Colour.green + "                / __/")
                print(Colour.blue + "              _/ /")
                print(Colour.magenta + "             /__/")
                print(Colour.red + "            //")
                print(Colour.orange + "           /'")
                print(Colour.white + " ")
                print(" ")
                print("(The crowd goes wild!)")
                print(" ")
                sleep(1)
                print(Colour.magenta + "The Dragon " + Colour.white + "breathes powerful rainbow flames at you for " + Colour.red + str(dragspecialdamage) + Colour.white + " damage!")
                print(" ")
                print(" ")
                print(Colour.red + "  . (  )   /\   _                 " + Colour.white + "(")
                print(Colour.orange + "     \ |  (  \ ( \.(               " + Colour.white + ")                      " + Colour.magenta + "_____")
                print(Colour.yellow + "   \  \ \  `  `   ) \             " + Colour.white + "(  " + Colour.magenta + "___                 / _   |")
                print(Colour.green + "  (_`    \+   . x  ( .\            " + Colour.white + "|" + Colour.magenta + "/   \____-----------/ (" + Colour.red + "o" + Colour.magenta + ")   \_")
                print(Colour.blue + " - .-               \+  ;          " + Colour.magenta + "(  O                           \____")
                print(Colour.magenta + "                           )        " + Colour.magenta + "\_____________  `              \  / ")
                print(Colour.red + " (__                +- .( -'.- <. - _  " + Colour.white + "VVVVVVV VV V" + Colour.magenta + "\                 \/")
                print(Colour.orange + " (_____            ._._: <_ - <- _  " + Colour.magenta + "(--  _" + Colour.white + "AAAAAAA__A" + Colour.magenta + "_/                  |")
                print(Colour.yellow + "  .    /./.+-  . .- /  +--  - .     " + Colour.magenta + "\______________//_              \_______")
                print(Colour.green + "   (__ ' /x  / x _/ (                                  " + Colour.magenta + "\___'          \     /")
                print(Colour.blue + "  , x / ( '  . / .  /                                      " + Colour.magenta + "|           \   /")
                print(Colour.magenta + "     /  /  _/ /    +                                      " + Colour.magenta + "/              \/")
                print(Colour.red + "  '    (__/                                             " + Colour.magenta + "/                  |")
                print(" ")
                print(" ")
                print(Colour.white + " ")
                hp = hp - damagetoplayer
        elif energy < 100:
            print("You don't have the" + Colour.blue + " energy" + Colour.white + " to do this!")
            sleep(1)
            input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
            goto .dragfight
        if keepfighting == True:
            sleep(1)
            input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
            goto .dragfight
    
    
elif attack == "d":
    print("")
    if potions > 0:
        if hp < 200:
            print(Colour.white + "You drink a huge red potion and heal for" + Colour.green + " +30" + Colour.white + " HP.")
            hp = hp + 30
            potions = potions - 1
            print(Colour.magenta + " ")
            print("     _____")
            print("    `.___,'")
            print("     (___)")
            print("     <   > ")
            print("      ) (")
            print("     /`-.\ ")
            print("    /     |")
            print("   / " + Colour.red + "_    _" + Colour.magenta + "|")
            print("  :" + Colour.red +",' `-.' `" + Colour.magenta +":")
            print(Colour.magenta + "  |         |")
            print("  :         ;")
            print("   \       /")
            print("    `.___.' SSt")
            print(" ")
            sleep(1)
            if draghp > 150:
                print(Colour.magenta + "The Dragon " + Colour.white + "looks confident.")
            if draghp < 150:
                print(Colour.magenta + "The Dragon " + Colour.white + "is starting to enjoy the fight.")
    elif hp > 200:
        hp = 200
    elif hp >= 200:
        print(Colour.white + "You cannot heal, you have full " + Colour.red + "HP!")
    elif potions == 0:
        print(Colour.white + "You cannot heal, you are out of " + Colour.magenta + "potions!")
    if keepfighting == True:
        sleep(1)
        input(Colour.white + "Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .dragfight
#energy system
elif attack == "e":
    print("")
    if energy < 200:
        print(Colour.white + "You recharge " + Colour.blue + "+30 " + Colour.white + "energy.")
        energy = energy + 30
        sleep(1)
        print(Colour.magenta + "The Dragon" + Colour.white + " takes this chance to attack you for " + Colour.red + str(damagetoplayer) + Colour.white + " damage!")
        hp = hp - damagetoplayer
        print(Colour.magenta + "")
        print("    <>=======() ")
        print("   (/\___   /|||          ()==========<>_")
        print("         \_/ | ||        //|\   ______/ \)")
        print("           \_|  ||      // | \_/")
        print("             \|\/|\_   //  /\/")
        print("              (" + Colour.red +"oo" + Colour.magenta + ")\ \_//  /") 
        print(Colour.magenta + "             //_/\_\/ /  |")
        print("            @@/  |=\  \  |")
        print("                 \_=\_ \ |")
        print("               \==\ \|\_ snd")
        print("             __(\===\(  )|")
        print("           (((~) __(_/   |")
        print("           (((~) \  / ")
        print("           ______/ /")
        print("           '------'")
        print(" ")
        print(Colour.white + " ")
    elif energy > 200:
        energy = 200
    elif energy >= 200:
        print("You have full energy!")
    if keepfighting == True:
        sleep(1)
        input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
        goto .dragfight
else:
    print(Colour.red + "That is not a valid option!")
    sleep(1)
    goto .dragfight

label .theend
clear()
print(Colour.magenta + "The Dragon: " + Colour.white + "You are strong. You deserved to win.")
sleep(2)
print(Colour.magenta + "The Dragon: " + Colour.white + "That was the best fight I have had in a while.")
sleep(2)
input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
clear()
print(Colour.blue + "Announcer: " + Colour.white + "And " + Colour.red + name + Colour.white + " has done the unimaginable!")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.red + name + Colour.white + " took down the undefeatable " + Colour.magenta + "The Dragon" + Colour.white + "!!!")
sleep(2)
print("")
print(Colour.white + "The crowd cheers your name once more.")
sleep(2)
print(Colour.red + name + Colour.white + ", " + Colour.red + name + Colour.white + ", " + Colour.red + name + Colour.white + "!!!")
sleep(2)
print("")
input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
clear()
print(Colour.blue + "Announcer: " + Colour.white + "For this, I must award " + Colour.red + name + Colour.white + " with...")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.white + "..." + Colour.magenta + "The Trophy of Awesomeness" + Colour.white + "!")
print(Colour.orange + "               ___________")
print(Colour.yellow + "              '._==_==_=_.'")
print(Colour.yellow + "              .-\:      /-. ")
print(Colour.yellow + "             | (|:.     |) | ")
print(Colour.yellow + "              '-|:.     |-' ")
print(Colour.yellow + "                \::.    / ")
print(Colour.yellow + "                 '::. .' ")
print(Colour.yellow + "                   ) ( ")
print(Colour.orange + "                 _.' '._ ")
print(Colour.orange + "         jgs     -------       "")
print(Colour.white + "")
sleep(2)
print(Colour.blue + "Announcer: " + Colour.red + name + Colour.white + " is the new " + Colour.magenta + "Champion of Awesomeness" + Colour.white + "!")
sleep(2)
input("Click " + Colour.red + "[ENTER] " + Colour.white + "to continue: ")
label .replayyesno
clear()
replay = input("Click " + Colour.red + "[a] " + Colour.white + "to finish the game or " + Colour.blue + "[b] " + Colour.white + "to enter the tournament again: ")
if replay == "a":
    clear()
    print(Colour.red + "  ********** **      ** ********   ******** ****     ** *******  ")
    print(Colour.orange + " /////**/// /**     /**/**/////   /**///// /**/**   /**/**////** ")
    print(Colour.yellow + "     /**    /**     /**/**        /**      /**//**  /**/**    /**")
    print(Colour.green + "     /**    /**********/*******   /******* /** //** /**/**    /**")
    print(Colour.blue + "     /**    /**//////**/**////    /**////  /**  //**/**/**    /**")
    print(Colour.magenta + "     /**    /**     /**/**        /**      /**   //****/**    ** ")
    print(Colour.red + "     /**    /**     /**/********  /********/**    //***/*******  ")
    print(Colour.orange + "     //     //      // ////////   //////// //      /// ///////   ")
    print(Colour.white + " ")
elif replay == "b":
    clear()
    goto .start
else:
    clear()
    goto .replayyesno

















