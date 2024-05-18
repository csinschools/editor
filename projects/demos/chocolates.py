from goodies import *
# Your amazing code goes here!
print(Colour.green + "Let's play a game!" + Colour.reset)
print("There are 12 chocolates on the table.")
print("Ther winner gets all the chocolates!")
print("When it's your turn, you can take " + Colour.red + "1, 2 or 3 " + Colour.reset + "chocolates.")
print("When it's my turn, I can take " + Colour.red + "1, 2 or 3 " + Colour.reset + "chocolates.")
print("The person who takes the last chocolate(s) wins the whole lot!")
print()
print(Colour.yellow + "Since you are my guest, I'll even let you go first." + Colour.reset)
print()

chocs = 12

keep_playing = True

while keep_playing == True:
    while chocs > 0:
        print("There are " + Colour.green + f"{chocs}" + Colour.reset + " chocolates remaining!")
        print()
        for i in range(chocs):
            print("🍫 ", end = "")
        print()
        print()
        
        valid_response = False
        while valid_response == False:
            try:
                take = int(input("Enter the number of chocolates you'll like to take:"))
                if take < 1 or take > 3:
                    raise "Error"
                chocs = chocs - take
                print(f"Great choice, there are " + Colour.green + f"{chocs}" + Colour.reset + " chocolates remaining!")
                valid_response = True
            except:
                print(Colour.red + "Invalid response, please enter a number between 1 and 3." + Colour.reset)
    
        print("Lemme think...")
        sleep(2)
        take = 4 - take
        print("I'll take " + Colour.magenta + f"{take}" + Colour.reset + " chocolates.")
        chocs = chocs - take
        
    print("I win!")
    answer = input("Play again? [y/n]")
    if answer.lower() != "y":
        keep_playing = False
print(Colour.magenta + "Bye now, better luck next time!")
    
