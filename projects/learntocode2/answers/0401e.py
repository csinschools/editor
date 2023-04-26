label .jukebox
clear()
print('>>>> Jukebox <<<<')
printImage("https://cdn-icons-png.flaticon.com/512/5805/5805239.png", 100, 100)
print('[a] Play Music')
print('[b] Play Sound effect')
print('[c] Quit')

choice = input("Enter your choice:")
if choice == 'a':
    print(Colour.purple + 'Song Menu' + Colour.cyan)
    print('[a] Myth')
    print('[b] Cybernoid II')
    print('[c] Golden Axe' + Colour.reset)
    
    song = input("Enter your song choice:")
    if song == 'a':
        print("Playing Myth song...")
    elif song == 'b':
        print("Playing Cybernoid II song...")
    elif song == 'c':
        print("Playing Golden Axe song...")
elif choice == 'b':
    print(Colour.purple + 'Sound Effect Menu' + Colour.cyan)
    print('[a] Cat')
    print('[b] Dogs barking')
    print('[c] Whistle' + Colour.reset)
    
    song = input("Enter your sound effect choice:")
    if song == 'a':
        print("Playing cat sound...")
    elif song == 'b':
        print("Playing dogs barking sound...")
    elif song == 'c':
        print("Playing whistle sound...")
elif choice == 'c':
    goto .end
goto .jukebox

label .end
print("bye bye!")