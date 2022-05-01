# Write a program that asks the user for a planet
# and then displays a fact about that planet.
#
# Keep asking for planets until the user types "quit"!

from csinsc import *

label .menu

print("What's your favourite planet?")
planet = input("Enter your planet (all lowercase): ")

if planet == "mercury":
    print("Mercury is the closest planet to the Sun! Did you know that a year on Mercury is just 88 days long?")
    goto .menu

if planet == "venus":
    print("Venus is the second planet from the Sun! Did you know that Venus is the third brightest natural object in the sky after the Sun and the Moon?")
    goto .menu

if planet == "earth":
    print("That's where we live! Earth is the third planet from the Sun! Did you know that Earth's surface is 70% water?")
    goto .menu

if planet == "mars":
    print("Mars is the fourth planet from the Sun! Did you know that the tallest mountain in the Solar System, Olympus Mons, is on Mars and is 21km high? That's almost 13km higher than Mount Everest!")
    goto .menu

if planet == "quit":
    goto .end

print ("I've never heard of that planet!")
goto .menu

label .end
print("Have a nice day! Don't space out!")
