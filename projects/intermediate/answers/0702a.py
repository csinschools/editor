from csinsc import *
from random import *

health = 100
potions = 5

orc_health = 10
ogre_health = 50

print(Colour.blue + "Welcome to the Tournament of Champions!" + Colour.reset)
sleep(0.5)
name = input("What is your name, fine warrior? ")

if name.isupper() == True:
  print("What an amazingly BOLD name!!")

print(Colour.yellow + "AND NOW..." + Colour.reset)
print("For the first battle, we have " + name + " up against an orc!")
print(r'''
        _____
    .-,;='';_),-.
     \_\(),()/_/
       (,___,)
      ,-/`~`\-,___
     / /).:.('--._)
    {_[ (_,_)
        | Y |
snd    /  |  \
       """ """
''')
print("Will " + name + " survive??")

fighting_orc = True 

while fighting_orc == True:
  print(Colour.green + "Health:" + str(health))
  print("Potions:" + str(potions) + Colour.reset)
  print("1. Fight")
  print("2. Drink potion")
  action = input("What would you like to do [1/2]?")
  if action == "1" or "fight" in action or "attack" in action:
    damage = randint(0, 10)
    print(name + " attacks the Orc...")
    if damage == 0:
      print(Colour.yellow + "And misses..!!" + Colour.reset)
    else:
      print(Colour.green + "And hits it for " + str(damage) + " point of damage!" + Colour.reset)
      orc_health = orc_health - damage
      if orc_health <= 0:
        print(Colour.orange + "The orc is defeated!" + Colour.reset)
        fighting_orc = False
        fighting_ogre = True
  elif action == "2" or "potion" in action or "drink" in action:
    if potions > 0:
      print(name + " drinks the potion..")
      healing = randint(5, 10)
      print(Colour.cyan + "And is healed for " + str(healing) + " health!" + Colour.reset)
      potions = potions - 1
      health = health + healing
    else:
      print("But there are no potions left!")
  else:
    print("Invalid action, you've wasted your turn!")

  if orc_health > 0:
    print("Now the orc attacks...")
    damage = randint(0, 10)
    print("The orc swings his rusty sword at " + name + "!!")
    if damage == 0:
      print("And misses..!!")
    else:
      print(Colour.red + "And hits " + name + " for " + str(damage) + " point of damage!" + Colour.reset)
      health = health - damage  

    if health <= 0:
      print("Oh no, our hero " + name + " has fallen!")
      fighting_orc = False
      fighting_ogre = False

if health <= 0:
  print("The end")

if fighting_ogre == True:
  print("Now for the final challenge, " + name + " will face the mighty OGRE!")

  print(r'''

                           __,='`````'=/__
                          '//  (o) \(o) \ `'         _,-,
                          //|     ,_)   (`\      ,-'`_,-\
                        ,-~~~\  `'==='  /-,      \==```` \__
                       /        `----'     `\     \       \/
                    ,-`                  ,   \  ,.-\       \
                   /      ,               \,-`\`_,-`\_,..--'\
                  ,`    ,/,              ,>,   )     \--`````\
                  (      `\`---'`  `-,-'`_,<   \      \_,.--'`
                   `.      `--. _,-'`_,-`  |    \
                    [`-.___   <`_,-'`------(    /
                    (`` _,-\   \ --`````````|--`
                     >-`_,-`\,-` ,          |
                   <`_,'     ,  /\          /
                    `  \/\,-/ `/  \/`\_/V\_/
                       (  ._. )    ( .__. )
                       |      |    |      |
                        \,---_|    |_---./
                        ooOO(_)    (_)OOoo  
  ''')  

while fighting_ogre == True:
  print("Health:" + str(health))
  print("Potions:" + str(potions))
  print("1. Fight")
  print("2. Drink potion")
  action = input("What would you like to do [1/2]?")
  if action == "1":
    damage = randint(0, 10)
    print(name + " attacks the Ogre...")
    if damage == 0:
      print("And misses..!!")
    else:
      print("And hits it for " + str(damage) + " point of damage!")
      ogre_health = ogre_health - damage
      if ogre_health <= 0:
        print("The ogre is defeated!")
        fighting_ogre = False
        won = True
  elif action == "2":
    if potions > 0:
      print(name + " drinks the potion..")
      healing = randint(5, 10)
      print("And is healed for " + str(healing) + " health!")
      potions = potions - 1
      health = health + healing
    else:
      print("But there are no potions left!")
  else:
    print("Invalid action, you've wasted your turn!")

  if ogre_health > 0:
    print("Now the ogre attacks...")
    damage = randint(0, 20)
    print("The ogre swings his huge club at " + name + "!!")
    if damage == 0:
      print("And misses..!!")
    else:
      print("And hits " + name + " for " + str(damage) + " point of damage!")
      health = health - damage  

    if health <= 0:
      print("Oh no, our hero " + name + " has fallen!")
      fighting_ogre = False
      won = False

if won == True:
  print("Congratulations, " + name + " you are the champion of the tournament! There is truly no mightier hero in all the lands!")

print(Colour.blue + "THE END!" + Colour.reset)
