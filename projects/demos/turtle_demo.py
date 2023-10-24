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

repeat 6:
    forward(40)
    right(60)
    
left(90)
penup()
forward(160)
pendown()

speed("fastest")
repeat 20:
    repeat 3:
        forward(50)
        right(120)
    right(18)
    
speed("slowest")
left(135)
penup()
forward(180)
pendown()

bgcolor("grey")

red = 0
speed("fastest")
repeat 30:
    color(red / 30, 0, 0)
    repeat 4:
        forward(50)
        right(90)
    right(12)
    red = red + 1