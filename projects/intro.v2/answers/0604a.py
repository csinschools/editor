from goodies import *

label .question

print(Colour.reset + "What's your favourite planet?")
planet = input("Enter your planet (all lowercase) or type 'quit' to end: ")

if planet == "mercury":
    print(Colour.cyan + "Mercury is the closest planet to the Sun! Did you know that a year on Mercury is just 88 days long?")
    goto .question

if planet == "venus":
    print(Colour.cyan + "Venus is the second planet from the Sun! Did you know that Venus is the third brightest natural object in the sky after the Sun and the Moon?")
    goto .question

if planet == "earth":
    print(Colour.cyan + "That's where we live! Earth is the third planet from the Sun! Did you know that Earth's surface is 70% water?")
    goto .question

if planet == "mars":
    print(Colour.cyan + "Mars is the fourth planet from the Sun! Did you know that the tallest mountain in the Solar System, Olympus Mons, is on Mars and is 21km high? That's almost 13km higher than Mount Everest!")
    goto .question

if planet == "quit":
    goto .end

print (Colour.cyan + "I've never heard of that planet!")
goto .question

label .end
print(Colour.reset + "Have a nice day! Don't space out!")
