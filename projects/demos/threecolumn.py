from random import shuffle
from goodies import slowPrint, Colour

start_emoji = 128512

num_emojis = 27
num_columns = 3

#emojis = list(range(start_emoji, start_emoji + num_emojis))
emojis = ['😁','💧','❤️','✌️','🐧','🤷‍♂️','😡','🥶','🤢','🤡','👻','🤖','💩','🐵','🐨','🐷','🦖','🦄','🐋','🐾','🦒','🦆','🐎','🐢','🦴','👀','🦋']
    
shuffle(emojis)

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
    print(":1:\t:2:\t:3:")
    for row in range(num_emojis // num_columns):
        for col in range(num_columns):
            print(emojis[row * num_columns + col], end = "\t")
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
    
print(Colour.cyan + "Secretly pick an emoji below..." + Colour.reset)
print()
display(emojis)
print()
column = getChoice("Which column is your emoji in (1, 2, or 3): ")
emojis = collect(emojis, column - 1)

animate(emojis)
display(emojis)
print()
column = getChoice("Which column is your emoji in (1, 2, or 3): ")
emojis = collect(emojis, column - 1)

animate(emojis)
display(emojis)
print()
column = getChoice("Which column is your emoji in (1, 2, or 3): ")
emojis = collect(emojis, column - 1)

animate(emojis)
slowPrint("Your emoji is....")
sleep(0.5)
print(emojis[num_emojis // 2])
sleep(0.5)
print(Colour.green + "Did I get it right??" + Colour.reset)

