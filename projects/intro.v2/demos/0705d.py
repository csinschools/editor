from goodies import Colour
label .begin
print("Choose Your Own Adventure: Taylor Swift's Magical Concert!")
print()
print("Welcome to an exciting adventure with the one and only Taylor Swift!")
print("You're about to step into her world of music, magic, and mystery. Can you make the right choices to help Taylor get ready for her biggest concert ever? Your decisions will shape the story, so choose wisely!")
print()
print("Let's begin!")
name = input("Enter your name: ")


clear()
print("One day, you get a special letter in the mail. It’s from none other than Taylor Swift herself! The letter reads:")
print()
print("Dear " + name + ",")
print()
print("You're invited to the magical concert of a lifetime! Come backstage, help me get ready, and even meet some of my special guests. But be careful – there are some surprises along the way that only you can solve!")
print()
print("Ready for an adventure?")
print()
print("Love,")
print("Taylor Swift")
print()
print("You are so excited! You put on your best concert outfit and head to the stadium where Taylor’s concert is happening. ")

label .entrance
print("You are at the main entrance at the stadium, there are two paths ahead of you:")
print(Colour.yellow)
print("1. Go backstage to meet Taylor and help her get ready.")
print("2. Explore the stadium and see if you can find some of Taylor’s special guests.")
print(Colour.reset)
choice = input("Which option would you like to choose? ")
if choice == "1":
    goto .backstage
if choice == "2":
    goto .stadium 
print("Invalid choice, please choose again!")
sleep(1)
goto .entrance

label .backstage
clear()
print("You walk backstage, and the first thing you see is Taylor’s tour bus.")
print("It's decorated with sparkles and lights! Taylor is waiting for you with a big smile. She looks excited to see you.")
print()
print(Colour.pink + "'Hey there! I need your help. Can you help me decide what outfit to wear for the concert? I’m torn between two options!'" + Colour.reset)  
print()
print("You look at the two outfits she shows you:")
print(Colour.yellow)
print("1. A glittery red dress with matching boots and a sparkly guitar.")
print("2. A shiny black leather jacket with a cool pair of sunglasses and boots.")
print(Colour.reset)
choice = input("Which option would you like to choose? ")
if choice == "1":
    goto .dress
if choice == "2":
    goto .jacket 
print("Invalid choice, please choose again!")
sleep(1)
goto .backstage

label .stadium
clear()
print("You decide to explore the stadium, feeling excited to see who you can find.")
print("You walk through the hallways, listening to the music echoing from the main stage.")
print("Suddenly, you see a door marked " + Colour.red + "'VIP Only.'" + Colour.reset)
print()
print("You have the chance walk inside and possibly check out the special guests or return to the main entrance.")
print(Colour.yellow)
print("1. Go inside the VIP room")
print("2. Return to the entrance")
print(Colour.reset)
choice = input("Which option would you like to choose? ")
if choice == "1":
    goto .VIP
if choice == "2":
    goto .entrance 
print("Invalid choice, please choose again!")
sleep(1)
goto .stadium

label .dress
clear()
print("Taylor grins and says, ")
print(Colour.pink + "'Great choice! This one's perfect for a big performance, I love the glitter and elegance!. Let's go on stage!'" + Colour.reset)
sleep(2)
print()
goto .microphone

label .jacket
clear()
print("Taylor grins and says, ")
print(Colour.pink + "'Great choice! This one's perfect for a big performance. I feel so much like a rock star dressed in black leather!! Let's go on stage!'" + Colour.reset)
sleep(2)
print()
goto .microphone


label .microphone
print("As you both walk to the stage, Taylor notices something strange: ")
print("the microphone isn’t working! The show is about to start, and the audience is waiting. You must help her fix it!")
print()
print("You see two tools to choose from:")
print(Colour.green + "   A magic wand that Taylor's fan gave her (it might help with some quick magic).")
print("   A toolbox with wires and pliers to fix the microphone." + Colour.reset)
print("What will you do?")
print(Colour.yellow)
print("1. Use the magic wand to try fixing the microphone.")
print("2. Use the toolbox to fix the microphone the old-fashioned way.")
print(Colour.reset)
choice = input("Which option would you like to choose? ")
if choice == "1":
    goto .wand
if choice == "2":
    goto .wires 
print("Invalid choice, please choose again!")
sleep(1)
goto .dress

label .wires
clear()
print("You remember the lessons your parents taught you about how to fix a broken microphone and reconnect everything together!")
print()
sleep(2)
print("Taylor Swift is so impressed by you skills and go on stage to begin singing 'Love Story'!")
sleep(2)
print(Colour.green + "The crowd goes crazy and Taylor Swift turns to you, winks and gives you a big air kiss!" + Colour.reset)
print()
print("You are invited onstage for a special duet with Taylor and have the most amazing time ever!")
goto .gameover

label .wand
clear()
print("You wave the wand using a magical gesture and say the words 'Abracadabra!'")
print()
sleep(2)
print("Taylor Swift is so impressed by you skills and go on stage to begin singing 'Love Story'!")
sleep(2)
print(Colour.red + "Unfortunately, the microphone emits a terrible screeching sound that doesn't stop and everyone starts leaving!" + Colour.reset)
print()
print("You are escorted out of the concert and have to go home!")
goto .gameover

label .VIP
clear()
print("You walk into the VIP room, excited about who you might see...")
print()
sleep(2)
print("Unfortunately there is only a security guard here!")
sleep(2)
print("He says in a gruff voice:")
print(Colour.red + "'HEY! You're not allowed here. That's it, I'm kicking you out of here.'" + Colour.reset)
print()
print("You are escorted out of the concert and have to go home!")
goto .gameover

label .gameover
print()
print(Colour.red + "GAME OVER" + Colour.reset)
choice = input("Would you like to play again?  [y/n]")
if choice == "y":
    goto .begin
print("Bye now, I hope you had fun!")



