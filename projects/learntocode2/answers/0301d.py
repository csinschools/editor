# pictionary!

from csinsc import printImage

printImage("samples/images/pictionary_01.png")
guess = input("What is this?")
if guess == "bridge":
    print("Yes! You got it in 1 go!")
else:
    print("Nope!")
    sleep(0.7)
    clear()
    printImage("samples/images/pictionary_02.png")
    guess = input("What is this?")
    if guess == "bridge":
        print("Yes! You got it in 2 goes!")
    else:
        print("Nope!")
        sleep(0.7)
        clear()
        printImage("samples/images/pictionary_03.png")
        guess = input("What is this?")    
        if guess == "bridge":
            print("Yes! You got it in 3 goes!")
        else:
            print("Nope!")
            sleep(0.7)
            clear()
            printImage("samples/images/pictionary_04.png")
            guess = input("What is this?")    
            if guess == "bridge":
                print("Yes! You got it in 4 goes!")
            else:
                print("Nope!")
                print("It's a bridge! Are my drawing skills really that bad??!")              
print("Thanks for playing!")