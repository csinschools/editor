from csinsc import *

playSound("samples/music/Golden_Axe.mp3")

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
        playSound("samples/music/Myth.mp3")
    elif song == 'b':
        playSound("samples/music/Cybernoid_II.mp3")
    elif song == 'c':
        playSound("samples/music/Golden_Axe.mp3")        
elif choice == 'b':
    print(Colour.purple + 'Sound Effect Menu' + Colour.cyan)
    print('[a] Cat')
    print('[b] Dogs barking')
    print('[c] Whistle' + Colour.reset)
    
    song = input("Enter your sound effect choice:")
    if song == 'a':
        playFreeSoundOrg(213889)
    elif song == 'b':
        playFreeSoundOrg(518570)
    elif song == 'c':
        playFreeSoundOrg(418564)
elif choice == 'c':
    goto .end
goto .jukebox

label .end
print("bye bye!")