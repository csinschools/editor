from csinsc import *

print(Colour.cyan + "##### Repeat loop #####" + Colour.reset)
repeat 4 times:
    print("Hello world")
    
print(Colour.cyan + "##### Repeat i = m to n #####" + Colour.reset)
repeat i = 15 to 20:
    print("i = ", i)
    
print(Colour.cyan + "##### Optional : (colon) #####" + Colour.reset)
x = 1
if x == 1
    print("x is 1")
while x == 1
    print("looping while x is 1")
    x += 1
    
print(Colour.cyan + "##### Forever loop #####" + Colour.reset)
x = 1
forever
    print("Looping, x = ", x)
    x += 1
    if x == 5
        break
    
print(Colour.cyan + "##### Until loop #####" + Colour.reset)
x = 1
until x == 5
    print("Looping, x = ", x)
    x += 1
    
print(Colour.cyan + "##### Single = for comparison #####" + Colour.reset)
x = 1
until x = 5
    print("Looping, x = ", x)
    if x = 3
        print("x = 3 is " + Colour.green + "special!" + Colour.reset)
    x += 1