from csinsc import *

print(Colour.yellow + "Hello, my name is Botty the Chatbot!" + Colour.reset)
sleep(0.5)

name = input("What is your name? ")
print("That's a lovely name " + name + "!")
if name.isupper() == True:
  print(Colour.blue + "It sure is LOUD though! :D" + Colour.reset)

mood = input("How are you doing today? ")
if "good" in mood or "great" in mood or "fantastic" in mood:
  print("That's great to hear!")
elif "okay" in mood or "meh" in mood or "alright" in mood:
  print("Yeah, it's one of those days isn't it?")
elif "bad" in mood or "terrible" in mood or "sad" in mood:
  print("I'm sorry to hear that.")
else:
  print("Ok, thanks for sharing. I'm feeling good.")

your_age = input("Can I ask how old you are? ")
your_age = int(your_age)

print("Cool! Can you guess my age?")

keep_guessing = True

while keep_guessing == True:
  your_guess = input("What's your guess? ")
  if your_guess == "14":
    print(Colour.green + "You got it!" + Colour.reset)
    keep_guessing = False
  else:
    print("Not quite... keep going!")

if your_age == 14:
  print("Hey, we're the same age!")
elif your_age < 14:
  print("Hey, I'm older than you!")
  difference = 14 - your_age
  print("I'm " + str(difference) + " years older than you in fact!")
  if difference > 5:
    print(Colour.cyan + "I'm OLD!" + Colour.reset)
else:
  print ("Hey, you're older than me!")
  difference = your_age - 14
  print("You're " + str(difference) + " years older than me in fact!")  
  if difference > 10:
    print("You're OLD!")

help = input(name + ", I need some advice. Do you think you can help me? ")
if "yes" in help or "yup" in help or "of course" in help or "yep" in help:
  pet = input("I'd like to get a pet, what animal do you think I should get? ")
  print(Colour.orange + "That's nice! I've always wanted a " + pet + "!" + Colour.reset)
  advice = True
else:
  print("That's okay. I'll probably figure it out myself.")
  pet = "dog"
  advice = False

print("I gotta go now, but let's play one last game. I'm thinking of an animal, what do you think it is?")
keep_guessing = True

while keep_guessing == True:
  your_guess = input("What's your guess? ")
  if your_guess == pet:
    print("You got it!")
    if advice == True:
      print(Colour.green + "And of course it was a " + pet + ", you helped me pick it!" + Colour.reset)
    else:
      print(r'''
   ,_____ ,
  ,._ ,_. 7\
 j `-'     /
 |o_, o    \
.`_y_`-,'   !
|/   `, `._ `-,
|_     \   _.'*\
  >--,-'`-'*_*'``---.
  |\_* _*'-'         '
 /    `               \
 \.         _ .       /
  '`._     /   )     /
   \  |`-,-|  /c-'7 /
    ) \ (_,| |   / (_
   ((_/   ((_;)  \_)))       -nabis      
      ''')
      print("Yes, it was a dog! I'm thinking of getting one as a pet!")
    keep_guessing = False
  else:
    print("Nope, try again")
    if advice == False:
      print("If you want a hint... it goes woof, woof!")
    else:
      print("If you want a hint... it was something you just said!")

print(Colour.yellow + "It was so fun talking to you. Bye now!" + Colour.reset)
