from random import shuffle
from goodies import slowPrint, Colour

start_emoji = 128512

num_emojis = 100
num_columns = 9
num_rows = num_emojis // num_columns

#emojis = list(range(start_emoji, start_emoji + num_emojis))
emojis = ['😁','💧','❤️','✌️','🐧','🤷‍♂️','😡','🥶','🤢','🤡','👻','🤖','💩','🐵','🐨','🐷','🦖','🦄','🐋','🐾','🦒','🦆','🐎','🐢','🦴','👀','🦋']
    
shuffle(emojis)
# fix every 9th card
def getChoice(prompt):
    keep_going = True
    while keep_going:
        try:
            column = input("Which column is your emoji in (1, 2, or 3): ")
            if int(column) >= 1 and int(column) <= 3:
                keep_going = False
            else:
                raise None
        except:
            print(Colour.red + "Please enter a number 1, 2 or 3." + Colour.reset)
    return int(column)

def display(cards):
    for row in range(num_emojis // num_columns):
        for col in range(num_columns):
            i = col * num_rows + row
            emoji = emojis[8] if (i + 1) % 9 == 0 else emojis[i % len(emojis)]
            print(("0" + str(i + 1))[-2:] + ": " + emoji, end = "\t\t")
        print()
        
def animate(cards, last = num_emojis):
    clear()
    for n in range(last):
        print("Shuffling...")
        print(cards[n])
        sleep(0.05)
        clear()
        
def collect(cards, centre):
    collected = []
    
    first = (centre + 1) % num_columns
    last = (centre + 2) % num_columns
    
    collected = [cards[i] for i in [n for n in range(first, num_emojis, 3)]] + [cards[i] for i in [n for n in range(centre, num_emojis, 3)]] + [cards[i] for i in [n for n in range(last, num_emojis, 3)]]
    return collected

print("Here is a very magical table of emojis...")    
sleep(2)
display(emojis)
input(Colour.red + "Press [Enter] to start the trick")
print(Colour.cyan + "Think of a number between 1 and 99..." + Colour.reset)
sleep(3)
input(Colour.red + "Press [Enter] once you've got your number")
print(Colour.yellow + "Now add the digits of that number together.." + Colour.reset)
sleep(2)
print("For example, if you thought of '25' then 2 + 5 = 7")
sleep(2)
input(Colour.white + "Press [Enter] once you've added the digits together")
print(Colour.green + "Now subtract that total from the original number you thought of" + Colour.reset)
sleep(2)
print("For example, 25 - 7 = 18")
sleep(2)
input(Colour.red + "Press [Enter] once you have your final answer")
print(Colour.cyan + "Now look up the emoji which is next to your final answer." + Colour.reset)
sleep(2)
print("Got it?")
sleep(2)
input(Colour.red + "Press [Enter] for me to read your mind...")

clear()
print(Colour.yellow + "Is it", end ="")
slowPrint(".....", delay = 0.5)

i = 0
while i <= 8:
    clear()
    print(Colour.yellow + "Is it.....")
    print(emojis[i])
    sleep(0.1)
    i += 1
sleep(1)
print(Colour.white + "This one???")
