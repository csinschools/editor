from csinsc import *

label .classical
clear()
print('Learn about Classical Composers')
printImage("https://b.thumbs.redditmedia.com/dChPM5cx5I2E9KX1z1ARVjdWXmZLkM2uM2m60VZf_Nk.png")
print('[a] Mozart')
printImage("https://is5-ssl.mzstatic.com/image/thumb/Purple1/v4/dc/aa/dc/dcaadc9e-af50-b706-47e1-1b05c081878b/source/256x256bb.jpg")
print('[b] Beethoven')
print('[c] Quit')

choice = input("Enter your choice:")
if choice == 'a':
    print(Colour.purple + 'Mozart Menu' + Colour.cyan)
    print('[a] Alla Turca')
    print('[b] Serenade in G Major')
    print('[c] Symphony 40' + Colour.reset)
    
    song = input("Enter your choice:")
    if song == 'a':
        print("Playing Mozart's All Turca....")
        playSound("samples/music/Mozart-Alla Turca.mp3")
    elif song == 'b':
        print("Playing Mozart's Serenade in G major....")
        playSound("samples/music/Mozart-Serenade in G major.mp3")
    elif song == 'c':
        print("Playing Mozart's Symphony Number 40....")
        playSound("samples/music/Mozart-Symphony 40.mp3")        
elif choice == 'b':
    print(Colour.purple + 'Beethoven Menu' + Colour.cyan)
    print('[a] Sonata 1')
    print('[b] Sonata 8')
    print('[c] Sonata 15' + Colour.reset)
    
    song = input("Enter your sound effect choice:")
    if song == 'a':
        print("Playing Beethovens's Sonata 1....")
        playSound("samples/music/Beethoven-Sonata 1.mp3")
    elif song == 'b':
        print("Playing Beethovens's Sonata 8....")
        playSound("samples/music/Beethoven-Sonata 8.mp3")
    elif song == 'c':
        print("Playing Beethovens's Sonata 15....")
        playSound("samples/music/Beethoven-Sonata 15.mp3")
elif choice == 'c':
    goto .end
input("Press [Enter] to return to main menu")
goto .classical

label .end
print("bye bye!")
    
    
    
    
    
    
    