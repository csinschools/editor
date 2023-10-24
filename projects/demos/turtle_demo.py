from turtle import *

color("blue")
forward(100)
left(90)
color("red")
forward(100)
left(90)
color("green")
forward(100)
left(90)
color("purple")
forward(100)

penup()
forward(20)
pendown()

bgcolor("yellow")
begin_fill()

color("black")
forward(20)
right(90)
forward(20)
right(90)
forward(20)
right(90)
forward(20)

fillcolor("orange")
end_fill()

penup()
forward(40)
pendown()

bgcolor("cyan")
repeat 6:
    forward(40)
    right(60)
    
left(90)
penup()
forward(160)
pendown()

bgcolor("white")
speed("fastest")
repeat 20:
    repeat 3:
        forward(50)
        right(120)
    right(18)
    
speed("slowest")
left(135)
penup()
forward(120)
pendown()

write("Next part is advanced...", font = ("arial", "12pt", "bold"))
sleep(1)

penup()
forward(60)
pendown()



counter = 0
speed("fastest")
repeat 50:
    bgcolor(0, counter / 50, 1 - counter / 50)
    color(counter / 50, 0, counter / 50)
    repeat 4:
        forward(counter + 5)
        right(90)
    right(10)
    counter = counter + 1